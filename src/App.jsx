import { useState } from "react";
import FinalAmount from "./components/FinalAmount/FinalAmount.jsx";
import Form from "./components/Form/Form.jsx";
import Title from "./components/Title/Title.jsx";
import Loading from "./components/Loading/Loading.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const fetchData = (currency) => {
    setIsLoading(true);
    fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency.code}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data?.rates?.[0]?.mid;
        if (rate) {
          const sum = parseFloat(currency.amount) * parseFloat(rate);
          setConvertedAmount(sum.toFixed(2));
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-zinc-50 w-3/5 rounded-md">
      <div className="p-7 flex flex-col">
        <Title></Title>
        <div className="flex justify-around m-5 items-center">
          <Form isLoading={isLoading} fetchData={fetchData}></Form>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <FinalAmount convertedAmount={convertedAmount}></FinalAmount>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
