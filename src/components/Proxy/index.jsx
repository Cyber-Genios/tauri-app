import "./index.css";
import { useContext } from "react";
import { Context } from "../Context";
import { CssTextField } from "../CssTextField";

export const Proxy = () => {
  const [execution, setExecution] = useContext(Context);
  const { proxy } = execution;
  return (
    <div className="infoContainer">
      <CssTextField
        multiline
        rows={4}
        id="outlined-basic"
        label="Proxy"
        variant="outlined"
        value={proxy}
        onChange={(ev) => {
          setExecution({ ...execution, proxy: ev.target.value });
        }}
      />
    </div>
  );
};
