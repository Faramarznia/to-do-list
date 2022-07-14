function Modal(props) {
  function undoneHandler() {
    console.log("انجام نشده");
    props.onUndone();
  }
  function doneHandler() {
    console.log("انجاااااااااااااااااام شده :)");

    props.onDone();
  }

  const title = sessionStorage.getItem("title");
  let detail;
  switch (title) {
    case "ورزش":
      detail =
        "یک ساعت دویدن ده دقیقه دراز نشست و ده تا هم شنا سويدی ";
      break;
    case "کتاب جز از کل" :
      detail =
        "باید امروز تموم بشه و نقدش رو هم بنویسم و بعد کتاب رو بدم به احسان";
      break;
    case "ویدیو های موبوکالج":
      detail = "ویدیوهای هفته نهم رو تموم کنم و هفته هفم رو یه بار دیگه نگاه کنم";
      break;
    case "پروژه ریکت" :
      detail = "باید استایل‌هاش رو بزنم و css رو تموم کنم";
      break;
    case "زبان آلمانی" :
      detail = "درس پنجم و ششم رو تموم کنم و قیدها رو توی نرم افزار آنکی مرور کنم";
      break;
      case "مطالعه‌ی آزاد":
      detail = "فیلم آینه از آندره تارکوفسکی رو ببین یا اینکه برو کتاب هرمان هسه رو بخون";
      break;
    default:
      detail = "کاری برای این تعریف نکردی";
  }

  return (
    <div className="modal">
      <h1>{title}</h1>
      <p className="title">{detail}</p>
      <button className="btndone" onClick={undoneHandler}>
        انجام نشده
      </button>
      <button className="btndone " onClick={doneHandler}>
        انجام شده
      </button>
    </div>
  );
}
export default Modal;
