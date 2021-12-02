import "./index.css";
import { useContext } from "react";
import { Context } from "../Context";
import { CssTextField } from "../CssTextField";

export const ParamsPreset = () => {
  const [execution, setExecution] = useContext(Context);
  const { presetDate, presetUrl, presetNumber } = execution;
  return (
    <div className="infoContainer">
      <CssTextField
        type="datetime-local"
        value={presetDate}
        onChange={(ev) =>
          setExecution({ ...execution, presetDate: ev.target.value })
        }
      />
      <CssTextField
        id="outlined-basic"
        label="Link"
        variant="outlined"
        value={presetUrl}
        onChange={(ev) => {
          setExecution({ ...execution, presetUrl: ev.target.value });
        }}
      />
      <CssTextField
        id="outlined-basic"
        label="Numero"
        variant="outlined"
        value={presetNumber}
        onChange={(ev) => {
          setExecution({ ...execution, presetNumber: ev.target.value });
        }}
      />
    </div>
  );
};
