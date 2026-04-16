function print() {
  console.log('HELLOOO');
}

function hover() {
  console.log('HOVERRRR');
}

function Description() {
  return (
    <div>
      <p>
        <button onMouseOver={hover}>Click</button>
      </p>
    </div>
  );
}

// function Description({ desc, price, feat, nam }) {
//   const list = feat.map((el) => <li key={el}>{el}</li>);
//   let isDiscount = price > 3000 ? '5 percent discount available' : null;
//   let styles = { backgroundColor: price > 3000 ? 'yellow' : 'black' };
//   return (
//     <div>
//       <p>
//         {desc}
//         <p style={styles}>{price}</p>
//         <p>{isDiscount}</p>
//         {nam.a}
//         {list}
//       </p>
//     </div>
//   );
// }
// export default Description;

function Description({ userName, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <p>{userName}</p>
    </div>
  );
}

export default Description;

// function Description({ desc, price, feat, nam }) {
//   const list = feat.map((el) => <li key={el}>{el}</li>);
//   let isDiscount = price > 3000 ? '5 percent discount available' : null;
//   let styles = { backgroundColor: price > 3000 ? 'yellow' : 'black' };
//   return (
//     <div>
//       <p>
//         {desc}
//         <p style={styles}>{price}</p>
//         <p>{isDiscount}</p>
//         {nam.a}
//         {list}
//       </p>
//     </div>
//   );
// }
// export default Description;

// function Description({ userName, color }) {
//   return (
//     <div style={{ backgroundColor: color }}>
//       <p>{userName}</p>
//     </div>
//   );
// }

// export default Description;
