import Locale from "./Locale";
import ResourceText from "./ResourceText";

const LoadLocalization =(locale: Locale): Promise<ResourceText> => {

    return import(`/localization/${Locale[locale].toLowerCase()}.json`).catch(() => import(`/localization/${Locale[Locale.EN].toLowerCase()}.json`)).then(({default: translations})=> {
        return translations;
    });
};

export default LoadLocalization;
