import "./index.css";
import { useContext } from "react";
import { Context } from "../Context";
import { CssTextField } from "../CssTextField";

export const Params = () => {
  const [execution, setExecution] = useContext(Context);
  const { cookie, execDate, execUrl, execNumber, execPhone } = execution;
  return (
    <div className="infoContainer">
      <CssTextField
        id="outlined-basic"
        label="Cookie"
        variant="outlined"
        value={cookie}
        onChange={(ev) =>
          setExecution({ ...execution, cookie: ev.target.value })
        }
      />
      <CssTextField
        type="datetime-local"
        value={execDate}
        onChange={(ev) =>
          setExecution({ ...execution, execDate: ev.target.value })
        }
      />
      <CssTextField
        id="outlined-basic"
        label="Link"
        variant="outlined"
        value={execUrl}
        onChange={(ev) =>
          setExecution({ ...execution, execUrl: ev.target.value })
        }
      />
      <CssTextField
        id="outlined-basic"
        label="Numero"
        variant="outlined"
        value={execNumber}
        onChange={(ev) =>
          setExecution({ ...execution, execNumber: ev.target.value })
        }
      />
      <CssTextField
        id="outlined-basic"
        label="Telefone"
        variant="outlined"
        value={execPhone}
        onChange={(ev) =>
          setExecution({ ...execution, execPhone: ev.target.value })
        }
      />
    </div>
  );
};
