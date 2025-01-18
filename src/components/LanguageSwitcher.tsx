import { Box, Text } from "@chakra-ui/react";
import i18next from "i18next";
import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md"

const userLanguage = navigator.language.split('-')[0];

const LanguageSwitcher = ({ visibleText = true }) => {

    const [id, setId] = useState(userLanguage === 'id' ? true : false)

    const handleChange = () => {
        const newId = !id;
        setId(newId);
        const language = newId ? "id" : "en";
        i18next.changeLanguage(language);
    };


    return (
        <Box display="flex" alignItems="center" justifyContent="center" onClick={handleChange}>
            <MdOutlineLanguage />
            {visibleText &&
                <Text fontSize={'xx-small'} position={'absolute'} bottom={0} right={2}>{id ? 'id' : 'en'}</Text>
            }
        </Box>
    )
}

export default LanguageSwitcher