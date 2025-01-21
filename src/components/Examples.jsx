import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (text) => {
    setSelectedTopic(text);
  };

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {!selectedTopic && <p>Please select topic</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title} </h3>
          <p>{EXAMPLES[selectedTopic].description} </p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
};

export default Examples;
