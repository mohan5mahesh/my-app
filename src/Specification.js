import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMemory, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";

export function Specification({ specs }) {
  return (
    <div>
      {/* <FontAwesomeIcon icon={faCoffee} />; */}
      <h2>Specs:</h2>
      <ul className="specs">
        <li>
          {specs.os === "Android" ? <AndroidIcon /> : <AppleIcon />}
          {specs.os}
        </li>
        <li>
          <FontAwesomeIcon icon={faMicrochip} />
          {specs.processor}
        </li>
        <li>
          <FontAwesomeIcon icon={faMemory} />
          {specs.ram}
        </li>
      </ul>
    </div>
  );
}
