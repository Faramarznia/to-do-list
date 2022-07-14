import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div className="App">
      <TodoCard title="ورزش"/>
      <TodoCard title="کتاب جز از کل" />
      <TodoCard title="ویدیو های موبوکالج" />
      <TodoCard title="پروژه ریکت" />
      <TodoCard title="زبان آلمانی" />
      <TodoCard title="مطالعه‌ی آزاد"/>
    </div>
  );
}

export default App;
