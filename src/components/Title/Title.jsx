import Logo from "../.././assets/icons8-currency-exchange-64.png";

const Title = () => {
  return (
    <div className="flex justify-around m-5 items-center">
      <div>
        <img className="w-24" src={Logo} alt="logo" />
      </div>
      <div className="font-bold text-2xl text-cyan-900">Currency Converter</div>
    </div>
  );
};

export default Title;
