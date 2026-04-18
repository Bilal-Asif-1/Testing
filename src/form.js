function submit() {
  console.log('Submitted');
}

function Form() {
  return (
    <form>
      <input placeholder="Enter your text"></input>
      <button onClick={submit}>submit</button>
    </form>
  );
}
export default Form;
