import { useState } from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "../components/Context";
import { Theme } from "../components/Theme";
import { ConfigExecution } from "./ConfigExecution";
import { history } from "../utils/history";
import { Execution } from "./Execution";

export default function Rotas() {
  const [execution, setExecution] = useState({
    cookie: `name=value; name=value; nikega=GA1.4.439398858.1633786578; _ga=GA1.3.439398858.1633786578; s_cc=true; __pr.cvh=vqnlvq3jr6; SIZEBAY_SESSION_ID_V4=1643A8ECAD39fd34398a8727414b8dbd7070f1b8331e; _gcl_au=1.1.1205611723.1633786580; _fbp=fb.2.1633786626324.807380073; sb_days=1633786627964; smeventsclear_16df2784b41e46129645c2417f131191=true; AMCVS_F0935E09512D2C270A490D4D%40AdobeOrg=1; chaordic_browserId=0-wDHuHy0431YKd4aWk1TGs3IvqI4TngZzWE1_16337869484713722; chaordic_anonymousUserId=anon-0-wDHuHy0431YKd4aWk1TGs3IvqI4TngZzWE1_16337869484713722; blueID=dcfc3510-f641-43ab-9594-9e4b66a89880; _pin_unauth=dWlkPU5HSTFOR0ZrWkRBdE9EVmhPUzAwTkdRNExXRXhZV1l0T0RjMVpHRTFOMll4TTJNMA; __privaci_cookie_consent_uuid=e3109125-3321-4ddc-b10a-79c30dc1e98f:2; __privaci_cookie_consent_generated=e3109125-3321-4ddc-b10a-79c30dc1e98f:2; sback_client=5816989a58791059954e4c52; sback_partner=false; __privaci_cookie_consents={"consents":{"127":1,"129":1,"130":1,"132":1},"location":"MG#BR","lang":"pt-br"}; _ce.s=v11slnt~1634825548867; __udf_j=59d9e1717444820fcf637f300a43bebed8c89eedf4237e71c89aeeb06f707a1c8ae75fb261868b0630a7d563c4489c7f; user_unic_ac_id=1872e981-ea06-9ac8-eea9-70f17df2a3bd; advcake_trackid=486d6266-7b02-6144-6844-22ec9fe9aac1; nikega_gid=GA1.4.1646098183.1638389415; _gid=GA1.3.1790287514.1638389415; Campanha=; Midia=; chaordic_testGroup=%7B%22experiment%22%3Anull%2C%22group%22%3Anull%2C%22testCode%22%3Anull%2C%22code%22%3Anull%2C%22session%22%3Anull%7D; IFCSHOPSESSID=v32qdclk8j8d028ftb6i78jvns; sback_customer_w=true; sback_browser=0-88266800-163846964576facd771862fbd1e0b84e2f066d82df3a138e05197407752861a9100dd780c5-17764919-200170183117,130176164158-1638469645; sback_customer=$2AeygUR3pWWOBjeHF1VqBnTmt2NkFEVxl1SxYTV3QVOPZ2aDZVTU5kTFFTdNx2Rz80M6tUSSRVWalDa45EMqVlW2$12; sback_access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuc2JhY2sudGVjaCIsImlhdCI6MTYzODQ2OTY0NiwiZXhwIjoxNjM4NTU2MDQ2LCJhcGkiOiJ2MiIsImRhdGEiOnsiY2xpZW50X2lkIjoiNTgxNjk4OWE1ODc5MTA1OTk1NGU0YzUyIiwiY2xpZW50X2RvbWFpbiI6Im5pa2UuY29tLmJyIiwiY3VzdG9tZXJfaWQiOiI2MTYzNDZkN2E1NTlkNTU1YzgzMmVhM2YiLCJjdXN0b21lcl9hbm9ueW1vdXMiOnRydWUsImNvbm5lY3Rpb25faWQiOiI2MTYzNDZkN2E1NTlkNTU1YzgzMmVhNDAiLCJhY2Nlc3NfbGV2ZWwiOiJjdXN0b21lciJ9fQ.4Omm9LSy8_Vx3gzIKSfaggIp70YrP-uzDPLCydLG2gA.WrWruyKqiYzRuyHeuyzRuy; sback_cart=61a925feaf616c27337216e2; sback_refresh_wp=no; _cm_ads_activation_retry=false; _abck=AEEAD49E7C96598478897A03B3167AA2~0~YAAQBb0QAujdahN9AQAAGIlGfQYmbFpSptam3pZxTKOLpEgmHXqaDy2vduV1+lzIPrclpNpclA3SmHXVdH1lKL6jpblFYBLEX/IQKzTyZ4UPZre05L27pKw4GClTE2BbDKukV/ERDCHgRa3BvfJ80i8RIqKrtaKayiPLIZtjwKhBwcUWIgc0mas72GmLTh9YR9E+uc6ikhgLAbbqcUN3rt7YP9dJESKjpx5+B2OP577Z5TT9hD6052Ukox0A0b9KMEismajZgLCZUhmHTRDlktcNKA0VfvMr4OIwbsLArxjKqA80xtrIoihawylNZmMGmrdIM41QyizpvHtRr8GCu+AnGunT1GLb54NgpkH4t8GQJ5srEfQpopASUahdM6snJTZueKkRQcdR/ztU27bEF8m59t6JPg==~-1~-1~-1; ak_bmsc=A39A6EC3A3F874395B386F5AF6CB7D7B~000000000000000000000000000000~YAAQBb0QAundahN9AQAAGIlGfQ0fUwADz7O+oXdD0+mEGMa+Xd15/b4DFVvr9DR9Mz7pzcMzY2vfSyYtqvU5EnXkoOZJ3pvZP0pLNyGx7x61oMqaqVs/MDQJqkWAxGvJkselT3pld96wO222+LLojnjbmxi0JgfSwlAPuXIqdnsytt9nxa6GXXqRBclERK6odvluBN4O89dwmXAPrKI8zN4WR59iI12g92JIjb0Q6S+nG8Q6ZPSNiqeCxhYxTBS7wl1Efk4+x/6I0VDbImYPuokf0SpEvoDWFAZB3qnAnby+gkIVqJlVwhRkaOVLknGWa7wb17an8vXfhkhO8BNDQt7RhEfiDmhZSEbwXmsR1hE7wuniEDAmXdSJM3H3/BTNu9yIXYuhA8FgWA==; bm_sz=AC7E2C434559F7CA57B432F5063D3E90~YAAQBb0QAurdahN9AQAAGIlGfQ2uK3urlaEkM+kOj1SjXT2C2ZxmlqpCSIY8pP1/A/brVmO4WAcO3QaCb8FEJpChX/mZ9VMacFWWjto7Ibm3l8MtnIHEeEYx50k2k2hiWE4nRjuiuxnUR+ZJpH6vMnOxyPGKU6DZtVlrcVz2a5j9aMDFy4P8GAsgbzbenpHBecQ4LkH6NGXAKqoTcpoYsHUMpFgPPk4EUJXFNmxEqWWy5CgqLXY7v2DXjCckE8XznWfptGvdPojWVsQr7urzZR1T2HlH+ZXff6z4zQY9UfCwagrD~3556164~3360309; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=-1124106680%7CMCIDTS%7C18963%7CMCMID%7C17641837100247587343076244177878306586%7CMCAAMLH-1639089115%7C4%7CMCAAMB-1639089115%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1638491515s%7CNONE%7CvVersion%7C5.2.0; gpv_v70=nikecombr%3Ehomepage; pv_templateName=HOME; gptype_v60=homepage; chaordic_session=1638487698473-0.08920707538097616; _st_ses=5613405105127101; _sptid=1592; _spcid=1592; _st_cart_script=helper_nike.js; _st_cart_url=/; _st_id=bmV3LmV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpsYldGcGJDSTZJbVJ2WjJSaGNtVmljMEJuYldGcGJDNWpiMjBpZlEuV0hRck9MenlOdkEyQnZ2UmllU0hOLVA4ZTA2SlVuVjhlMm5LU3lrd1B2RS5XcldydXlLcWlZelJpWUVpRWlxQnFC; meliuz_coupon=5; _gat_gtag_UA_142883149_1=1; _gat_gtag_UA_101374395_1=1; _gat_nikelaunchga=1; isLogged=false; sback_current_session=1; sback_total_sessions=31; smeventssent_16df2784b41e46129645c2417f131191=true; CSRFtoken=5ecccc95eef41231d72bd856cebe32cb; isLogged=1; bm_sv=D12F65C1A85A681F4C219B4D91E1BA2F~geR9EylXxgeOTMXC+bk7kZ6M+OtOGvGx/t/ohQDI+shk08C54uYo8cfjdogaSBS7Dt2nN5yxKdzL4MD3XJXVwfq+eg6hMmPTICIvgx5gkzf1LhvID1A7Vx/DkrkaBOPy035PlSAsZpLLdn9A8XEwrTQrdks0HFKUfYlxBJwEdaw=; lx_sales_channel=%5B%221%22%5D; RT="z=1&dm=nike.com.br&si=d0d91dc2-7f78-4267-aac8-bde0dd12798b&ss=kwpl9q97&sl=4&tt=i47&bcn=%2F%2F17de4c16.akstat.io%2F&obo=2"; s_sq=%5B%5BB%5D%5D; _derived_epik=dj0yJnU9a0dabHIxaTFnei0wZy1WVFRQMkZSRjZ0Ujg3cUhLNEwmbj1pLS1TQjc5N093NXd1X3hrZ3pCRmdBJm09MSZ0PUFBQUFBR0dwV0xRJnJtPTEmcnQ9QUFBQUFHR3BXTFE; _uetsid=b325071052e211ec9b5c3ba15f5599fc; _uetvid=537e67f0fb6b11eb94c87dc474f63058; stc119288=env:1638487711%7C20220102232831%7C20211203000724%7C5%7C1088072:20221202233724|uid:1633786949435.421259805.32019377.119288.139243673.:20221202233724|srchist:1088071%3A1638466904%3A20220102174144%7C1088072%3A1638469645%3A20220102182725%7C1088071%3A1638473885%3A20220102193805%7C1088072%3A1638473931%3A20220102193851%7C1088071%3A1638479691%3A20220102211451%7C1088072%3A1638479706%3A20220102211506%7C1088071%3A1638484317%3A20220102223157%7C1088072%3A1638484329%3A20220102223210%7C1088071%3A1638487699%3A20220102232819%7C1088072%3A1638487711%3A20220102232831:20221202233724|tsa:0:20211203000724; _spl_pv=269`,
    execDate: "2021-12-02T09:30:00",
    execUrl:
      "https://www.nike.com.br/dunk-high-x-fragment-design-67-80-445-331131",
    execNumber: "30",
    execPhone: "34992291965",
    presetDate: "2021-12-02T14:30:30",
    presetUrl:
      "https://www.nike.com.br/tenis-nike-pegasus-trail-3-masculino-153-169-224-324706?gridPosition=G1",  
    presetNumber: "38",
  });

  return (
    <Theme>
      <Context.Provider value={[execution, setExecution]}>
        <Router history={history}>
          {/* <Link to="/"> */}
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Inicio
          </button>
          {/* </Link> */}
          <Routes>
            <Route path="/" element={<ConfigExecution />} exact />
            <Route path="/execution" element={<Execution />} />
          </Routes>
        </Router>
      </Context.Provider>
    </Theme>
  );
}
