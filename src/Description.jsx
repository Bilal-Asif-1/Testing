function Description({ desc, price, feat, nam }) {
  const list = feat.map((el) => <li key={el}>{el}</li>);
  if (price > 4000) {
    return (
      <div>
        <p>
          {desc}
          {price}
          <p>Discount of 5 %</p>
          {nam.a}
          {list}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          {desc}
          {price}
          {nam.a}
          {list}
        </p>
      </div>
    );
  }
}
export default Description;
