import Accordion from "./components/Accordion/Accordion";
// import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion classname="accordion">
          <Accordion.Item
            id="item1"
            classname="accordion-item"
            title="E.l.f Cosmetics Perfect 10 Eyeshadow Palette in Nude Mood"
          >
            <article>
              <p>
                Swap your summer brights for deeper, earthy tones like browns,
                plums, and rich metallics to create a more dramatic, moody fall
                look that complements seasonal clothing and the changing
                environment
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="item2"
            classname="accordion-item"
            title="The Inkey List Bio-Active Ceramide Repairing and Plumping Moisturizer"
          >
            <article>
              <p>
                Although we love our matte foundations for their seamless
                coverage, some might be too drying for fall. Eggenberger
                recommends replacing the product with a more hydrating formula
                to help achieve a smoother coverage, such as this one from Kevyn
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="item3"
            classname="accordion-item"
            title="6 beauty products a beauty expert says you need for fall, starting at $10"
          >
            <article>
              <p>
                Fall doesn't only require us to update our closets to
                accommodate the seasonal changes; our skin, hair and makeup need
                to change, too. So, to prevent pesky split ends and flaky dry
                spots, we revamp our beauty routines at this time of year. To
                help us out during this transitional period, NewBeauty Senior
                Editor-At-Large Sarah Eggenberger shared with TODAY some beauty
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
