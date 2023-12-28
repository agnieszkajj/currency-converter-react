import { useState } from "react";
import FinalAmount from "./components/FinalAmount.jsx";
import Form from "./components/Form.jsx";
import Title from "./components/Title.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fetching, setFetching] = useState(false);

  const fetchData = (currency) => {
    setIsLoading(true);
    setFetching(true);
    fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency.code}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data?.rates?.[0]?.mid;
        if (rate) {
          const sum = parseFloat(currency.amount) * parseFloat(rate);
          setIsLoading(false);
          setConvertedAmount(sum.toFixed(2));
          setFetching(false);
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-zinc-50 w-3/5 rounded-md">
      <div className="p-7 flex flex-col">
        <Title></Title>
        <div className="flex justify-around m-5 items-center">
          <Form fetchData={fetchData} fetching={fetching}></Form>
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
