import Locale from "../localization/Locale";
import ResourceText from "../localization/ResourceText";

const LanguageSelect = (resourceText: ResourceText) => {
    return (
        <select name="languageSelect" id="languageSelect">
            <option value={Locale.EN}>{resourceText.english}</option>
            <option value={Locale.FI}>{resourceText.finnish}</option>
        </select>
    )
}
export default LanguageSelect;