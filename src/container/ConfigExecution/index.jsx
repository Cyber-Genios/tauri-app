import { useContext, useState } from "react";
import { Context } from "../../components/Context";
import { Params } from "../../components/Params";
import { ParamsPreset } from "./../../components/ParamsPreset";
import { Proxy } from "./../../components/Proxy";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const ConfigExecution = ({ classes }) => {
  const [execution] = useContext(Context);
  const [currentTab, setCurrentTab] = useState(0);

  const renderTab = (tab) => {
    const tabs = {
      0: <Params />,
      1: <ParamsPreset />,
      2: <Proxy />,
    };
    return tabs[tab];
  };

  const handleChange = (ev, tab) => {
    setCurrentTab(tab);
  };

  const renderExecButton = () => {
    return execution.cookie &&
      execution.execDate &&
      execution.execUrl &&
      execution.execNumber &&
      execution.execPhone &&
      execution.presetDate &&
      execution.presetUrl &&
      execution.presetNumber ? (
      <Link to="/execution">
        <button>Executar</button>
      </Link>
    ) : (
      <></>
    );
  };

  const styles = () => ({
    root: {
      "& button.Mui-selected": {
        color: "#000000",
      },
    },
    indicator: {
      backgroundColor: "#000000",
    },
  });

  const StyledTabs = withStyles(styles)(Tabs);
  const StyledTab = withStyles(styles)(Tab);

  return (
    <div>
      <div className="Hello">
        <h1>NikeBot</h1>
      </div>
      <div className="Hello">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            marginBottom: "20px",
          }}
        >
          <StyledTabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="Execução" />
            <StyledTab label="Preset" />
            <StyledTab label="Proxy" />
          </StyledTabs>
        </Box>
        {renderTab(currentTab)}
        <div className="Execution">{renderExecButton()}</div>
      </div>
    </div>
  );
};
