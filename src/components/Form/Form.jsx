const Form = ({ fetchData, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.amount.value || e.target.amount.value <= 0) {
      alert("please enter valid amount");
    } else {
      const currency = {
        amount: e.target.amount.value,
        code: e.target.code.value,
      };
      fetchData(currency);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="enter amount"
        className="p-1.5 outline-none rounded-md bg-zinc-200"
        name="amount"
      />
      <select name="code" className="rounded-md bg-zinc-200 p-1.5 ml-1.5">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
      <button
        disabled={isLoading}
        type="submit"
        className="rounded-md font-bold border-zinc-600  bg-zinc-200 px-2 py-1.5 ml-2 text-cyan-800"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
