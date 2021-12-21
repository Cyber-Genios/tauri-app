import { useState } from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "../components/Context";
import { Theme } from "../components/Theme";
import { ConfigExecution } from "./ConfigExecution";
import { history } from "../utils/history";
import { Execution } from "./Execution";

export default function Rotas() {
  const [execution, setExecution] = useState({
    cookie: `name=value; _ga=GA1.3.520474248.1638994870; chaordic_browserId=0-HUYtq1qAzJvpyswaMEAG5MqmzskNnV3DzEwe1638994870030710; chaordic_anonymousUserId=anon-0-HUYtq1qAzJvpyswaMEAG5MqmzskNnV3DzEwe1638994870030710; chaordic_testGroup=%7B%22experiment%22%3Anull%2C%22group%22%3Anull%2C%22testCode%22%3Anull%2C%22code%22%3Anull%2C%22session%22%3Anull%7D; nikega=GA1.4.520474248.1638994870; s_fid=570506C6B71CEE75-022A62A0FCCF9DE6; s_cc=true; _pin_unauth=dWlkPVpXVXlNemhqTldZdFpERmpZeTAwT0Rsa0xXRXhOVEl0TldZeE0yTXhNakUwTlRBNQ; user_unic_ac_id=e8479d88-09a0-489f-7fc8-250f8bfdf8ae; advcake_trackid=cb2acc56-cd1d-90c0-11ae-27802b724333; _gcl_au=1.1.945020119.1638994872; _fbp=fb.2.1638994872221.278890057; blueID=7958af19-b2e7-48e9-a2ff-bb88f97a205e; sback_browser=0-94657700-1638994872cd46e854ac6ebf8208bada4b80fee110a355049b145248503161b113b8e71a18-34539261-200170183117,130176164133-1638994872; sback_client=5816989a58791059954e4c52; sback_customer=$2gWycTRnpWWZhHe4U0c6lXTTlWVsFER15ET6xWVGR0bPdVbVRWaUhUTVJDWjBleilFa5J1YtpHOOBjMzdmdE12T2$12; sback_partner=false; sb_days=1638994874346; smeventsclear_16df2784b41e46129645c2417f131191=true; AMCVS_F0935E09512D2C270A490D4D%40AdobeOrg=1; s_sq=%5B%5BB%5D%5D; __kdtv=t%3D1639070543636%3Bi%3D0582d66462924eff80898dcf058ecbcfacc46253; _kdt=%7B%22t%22%3A1639070543636%2C%22i%22%3A%220582d66462924eff80898dcf058ecbcfacc46253%22%7D; _uetvid=7de5b2c0586311eca178f163258705a8; stc119288=env:1639070545%7C20220109172225%7C20211209175225%7C1%7C1088072:20221209172225|uid:1638994872615.1125092691.4405103.119288.140293852.:20221209172225|srchist:1088072%3A1639070545%3A20220109172225:20221209172225|tsa:0:20211209175225; _spl_pv=5; sback_total_sessions=2; bm_sz=FD9D1BB6D6A943736CE10EEE06DE86AD~YAAQBb0QAuqAJpp9AQAA1GvX3Q5ZYtuiZj9IgeUe8y19NyCLPTx7YAZXCFLC6v8L8yhKK+8nhD0j1SxToL9GO3/zLO3OAsXK2qqhgXgl85nqCbxEv7XspsH8P+koetoOkaw5Zc1JUcm4wy+buFSnrPwDjqN2bTRJTb/2lW4dZiuvzy9eDEoQa/h06f+nyhjQpvdiMvGZDbV7VhAjHIQb5LMGMLFV2+YM6lmo5W1HugjjgFXsoOSfwgPvVKBWTTn+dA3SRaIh4JBatDeXzEMH9AHBNINtkGj2UdVULje8coqOx9af~3355699~3621953; nikega_gid=GA1.4.692674444.1640104423; IFCSHOPSESSID=kbuva7nh9ht6ial6e6stc6vpnd; name=value; isLogged=true; _abck=E40F9EE9F77FFADFEB32163A6F6E62B2~0~YAAQBb0QAtC2KJp9AQAAKMku3gdoUbxopA0VzAEJP6GkHhTL88nTN3zR+h/Jxl/AcWr37RtH12gqnOMQJE/aNxe0EBFHA8KV9wpwvXQVaJawwjVLUY6zrxUrtLlT5PWVQVnNjPnrMx95z2aJbNY1aICikAG9LdE5+7oZJpEFHY1D/dAg2b5QeWxsfPzRPcI+anUWh5pQNenLgDyiinCTDtfMwi21T4XNvB0hQs3zaMtuMkIKtxOVQksBKn5ebEb1bMHWZMYwCx+XUYEinE1AcgRtM5W8/yC8BWFukEKIJR3XZyvBqAhF18JEEYEe9+w8eeemZOm8C2i6AUyuAz1iiDymgNRpynVARhH6QDnwcAeSAR1nYWxX4fyp9lHME2EbUMKW1xzdBoWyabxBTVfkBxJU5NtO+g==~-1~-1~-1; meliuz_coupon=5; ak_bmsc=B79927E87CF8E2B2CF2E15787F74539A~000000000000000000000000000000~YAAQBb0QAgqCLZp9AQAA4j5u3g6MrUajh0TQtuNSKt49y5sKWwTSo+a8iJiDecqgFwPpH+8e+BHJK60p5rGIJvmF1Fng41bMMpH3fQ/U+u6JH4ijCYzlPWvaCPaOM0mGorrWx6j9xALh0Rnv/DAHCmViP1pJ1cwsA2Wrl9guhelbchqa8yDawujBkv8KCsuBPHzNyAVVGR7y6sCpoxjhj0WNhYc9YRH8LemKUmMfKJMqnK+prCuw4xWGf5fjxjDuxi+ZiZ8/rTnFRz4+H4n7fwtATJE7aFsNouWK5EZBzCtcLCeHIvXQs/et/W65xdlX1gN65kFthuydpkK8cGbeot/SduiemdRWDJj7/q3djBIC6EkTzfdvOITgk7+Lt2w7KQ+x9OPsWoxcGCsVrg==; chaordic_session=1640114307500-0.7983725967125457; _gat_nikelaunchga=1; isLogged=1; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=-1124106680%7CMCIDTS%7C18983%7CMCMID%7C55429323786391679421067410947204615328%7CMCAAMLH-1640106004%7C4%7CMCAAMB-1640104421%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1640122139s%7CNONE%7CMCSYNCSOP%7C411-18977%7CvVersion%7C5.2.0; CSRFtoken=f415da9e14a439576c95d10b8687f907; bm_sv=FB35DD24F06FEE08FD6FDFA1DC115C84~pG7EkdQRdU9EWsB5nHEQurHBgXlUP29ditaUia2IhiMOh2MprKTqwZUA5kkmt2BA3ewgDybxq6kH6y9pzFF1LOWCR/w4kctBcxxSfasAyEJ2ChZhA7lak/3BVJmdGvChz2Bp/O4xx84sL7akFKESJIsl8hOI2slKAB+LozUNcJQ=; lx_sales_channel=2`,
    execDate: "2021-12-03T10:00:00",
    execUrl:
      "https://www.nike.com.br/womens-air-force-1-fontanka-153-169-211-357980",
    execNumber: "37",
    execPhone: "34992291965",
    presetDate: "2021-12-03T09:30:00",
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
