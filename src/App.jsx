import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75] lg:pt-[5.25]">
        <Button>Hello Button</Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
