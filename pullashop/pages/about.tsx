import { NextPage } from "next";
import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import LoadLocalization from "../localization/LoadLocalization";
import Locale from "../localization/Locale";
import ResourceText from "../localization/ResourceText";

const About: NextPage = () => {
    const [translationData, setTranslationData] = useState<ResourceText>();
    useEffect(() => {
        const getTranslations = async () => {
            const translations = await LoadLocalization(Locale.FI);
            setTranslationData(translations);
        }
        getTranslations();
    },[])
    
    return (
        <div>
            <Meta title="About"/>
            <h1>{translationData?.aboutUsTitle}</h1>
            <p>{translationData?.introduction}</p>
        </div>
    )
}
export default About;