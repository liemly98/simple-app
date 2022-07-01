import React from "react";

function Info() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>

        <div className="mockup-code">
          <pre data-prefix="1">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix="2">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Error!</code>
          </pre>
        </div>

        <div className="mockup-code">
          <pre data-prefix="~">
            <code>
              Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro
              quae qui et et dolore ratione.
            </code>
          </pre>
        </div>

        <div className="mockup-code">
          <pre>
            <code>without prefix</code>
          </pre>
        </div>
        <div className="mockup-code bg-primary text-primary-content">
          <pre>
            <code>can be any color!</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Info;
