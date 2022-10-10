/** @format */

export default function Option({ Value, Decourse, func , url}) {
  var num = Number(Value) - 1;

  console.log(url)

  return url[num].opt.map((s, i) => {
    const alpha = ["a .", "b .", "c .", "d ."];
    return (
      <div className="option" key={Math.random() * 100}>
        <input
          key={Math.floor(Math.random() * 500)}
          onClick={func}
          type="radio"
          name={url[num].ans}
          id={"Choice" + i}
          value={s}
        />
        <label key={Math.floor(Math.random() * 500)} htmlFor={"Choice" + i}>
          <b className="opt-letter">{alpha[i]} &nbsp;&nbsp; </b>
          {s}
        </label>
      </div>
    );
  });
}
