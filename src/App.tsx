import AccordionList from "./components/AccordionList";

function App() {
  return (
    <div className="min-h-screen bg-purple-900">
      <main>
        <section className="px-6">
          <div className="flex min-h-screen items-center justify-center">
            <AccordionList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
