import { useCustomTranslation } from "@/utils/translate";
import { faCheck, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Tooltip,
  cn
} from "@nextui-org/react";
import { useState } from "react";

interface LanguageSelectorProps {
  languages: {
    label: string;
    key: string;
    icon?: string;
  }[];
  isOpen?: boolean;
}

export function LanguageSelector({ languages, isOpen = true }: LanguageSelectorProps) {
  const [currLanguage, setCurrLanguage] = useState("en" as string);
  const { changeLanguage } = useCustomTranslation();

  return (
    <Dropdown>
      <Tooltip showArrow content="Language" placement="right" isDisabled={isOpen}>
        <div>
          <DropdownTrigger>
            <Button
              className={cn("w-full justify-start", !isOpen && "min-w-0 justify-center p-0")}
              variant="light"
              startContent={<FontAwesomeIcon icon={faFlag} className="h-5" />}>
              {isOpen && "Language"}
            </Button>
          </DropdownTrigger>
        </div>
      </Tooltip>
      <DropdownMenu variant="faded">
        <DropdownSection>
          {languages.map((language) => (
            <DropdownItem
              key={language.key}
              onPress={() => {
                changeLanguage(language.key);
                setCurrLanguage(language.key);
              }}
              startContent={
                language.icon && (
                  <Avatar alt={language.label} className="size-5" src={language.icon} />
                )
              }
              endContent={currLanguage === language.key && <FontAwesomeIcon icon={faCheck} />}>
              {language.label}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
