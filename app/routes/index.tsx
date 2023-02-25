import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [code, setCode] = useState<any>(
    JSON.stringify({
      type: "@webflow/XscpData",
      payload: {
        nodes: [
          {
            _id: "33686020-ec5a-7e8c-7df1-2f91ceaf53ae",
            type: "Block",
            tag: "div",
            classes: ["871efa67-5c6f-bc80-f38c-462c2c73e38e"],
            children: ["105ed3c3-99f0-8ed7-ea7e-d17f3086e156"],
            data: {
              search: { exclude: false },
              xattr: [],
              text: true,
              displayName: "",
              devlink: { runtimeProps: {}, slot: "" },
              attr: { id: "" },
              visibility: { conditions: [] },
              tag: "div",
            },
          },
          {
            _id: "105ed3c3-99f0-8ed7-ea7e-d17f3086e156",
            type: "Strong",
            tag: "strong",
            classes: [],
            children: ["f1533ce4-8c8c-4a4b-0037-f0517cfc23ec"],
          },
          {
            _id: "f1533ce4-8c8c-4a4b-0037-f0517cfc23ec",
            text: true,
            v: "WALDO THIS IS WORKINGGGGGG",
          },
        ],
        styles: [
          {
            _id: "871efa67-5c6f-bc80-f38c-462c2c73e38e",
            fake: false,
            type: "class",
            name: "Text Block",
            namespace: "",
            comb: "",
            styleLess:
              "padding-top: 70px; padding-bottom: 70px; background-color: hsla(0, 0.00%, 23.33%, 1.00); color: hsla(0, 0.00%, 100.00%, 1.00); text-align: center;",
            variants: {},
            children: [],
            createdBy: "5be5d603442f1fe2a923fc4f",
            selector: null,
          },
        ],
        assets: [],
        ix1: [],
        ix2: { interactions: [], events: [], actionLists: [] },
      },
      meta: {
        unlinkedSymbolCount: 0,
        droppedLinks: 0,
        dynBindRemovedCount: 0,
        dynListBindRemovedCount: 0,
        paginationRemovedCount: 0,
      },
    })
  );
  const [didSave, setDidSave] = useState(false);

  useEffect(() => {
    document.addEventListener("copy", (event: any) => {
      event.preventDefault();
      event.clipboardData.setData("application/json", code);
      console.log("copied", code);
    });
  }, [code]);

  const handleCopyClick = (event: any) => {
    // write "code" to clipboar

    document.execCommand("copy");

    // // transfer to clipboardData
    // const clipboardData = event.clipboardData.getData("application/json");
    // console.log(clipboardData);
  };

  console.log(typeof code);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-8">
        {!code && (
          <input
            type="text"
            className="border border-gray-300 rounded p-2"
            placeholder="paste code here"
            onPaste={(event) => {
              event.preventDefault();
              const clipboardData =
                event.clipboardData.getData("application/json");
              console.log(clipboardData);
              setCode(clipboardData);
            }}
          />
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => handleCopyClick(e)}
        >
          Copy
        </button>

        {didSave && <div>1 component saved!</div>}
      </div>
    </div>
  );
}
