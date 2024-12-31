/* eslint-disable tailwindcss/no-custom-classname */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { BasePage, GroupingComponent } from "@/component/shared/base";
import { BtnBinus, BtnBinusOutline, BtnBinusTransparant } from "@/component/shared/buttons";
import { CardBodyBinus } from "@/component/shared/card";
import FormComponent from "@/component/shared/form";
import { faChevronLeft, faChevronRight, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardFooter, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function index() {
  const formMethods = useForm();

  return (
    <BasePage>
      <GroupingComponent>
        <span>Button Example</span>
        <div className="groupComponent">
          <BtnBinus>default</BtnBinus>
          <BtnBinus disabled={true}>default</BtnBinus>
          <BtnBinusOutline className="btnIconBlack">
            outline <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
          </BtnBinusOutline>
          <BtnBinusTransparant>transparant</BtnBinusTransparant>
          <BtnBinusOutline className="btnIconBinusOrange">
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          </BtnBinusOutline>
          <BtnBinusOutline className="btnIconBinusOrange">
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
          </BtnBinusOutline>
        </div>
      </GroupingComponent>

      <GroupingComponent>
        <span>Card Example</span>
        <Card className="w-full">
          <CardBodyBinus>
            <div className="titleSection">
              <span className="title">Testing</span>
              <span className="subTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse architecto sint sed
                voluptatum sequi, doloremque autem accusantium libero quibusdam quo quidem
                cupiditate odit asperiores sapiente ducimus eaque quas? Veritatis, deleniti.
              </span>
            </div>
            <FormComponent
              className={"content flex w-full flex-col gap-3"}
              {...formMethods}
              onSubmit={() => {}}>
              <GroupingComponent className="cardForm">
                <Input
                  type="text"
                  label="Pendidikan Terakhir"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                />
                <Input
                  type="text"
                  label="Nama Institusi"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                />
              </GroupingComponent>
              <GroupingComponent className="cardForm">
                <Input
                  type="text"
                  label="Pendidikan Terakhir"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                />
                <Input
                  type="text"
                  label="Nama Institusi"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                />
              </GroupingComponent>
            </FormComponent>
          </CardBodyBinus>

          <CardFooter className="flex items-center justify-between border-t-1">
            <div className="flex items-center gap-3">
              <BtnBinusOutline>
                <FontAwesomeIcon className="icon btnIconBinusOrange" icon={faChevronLeft} />
              </BtnBinusOutline>
              <BtnBinusOutline>
                <FontAwesomeIcon className="icon btnIconBinusOrange" icon={faChevronRight} />
              </BtnBinusOutline>
            </div>
            <div className="flex items-center gap-3">
              <BtnBinusOutline>
                testing{" "}
                <FontAwesomeIcon className="iconMark btnIconBinusOrange" icon={faQuestionCircle} />
              </BtnBinusOutline>
              <BtnBinus>testing</BtnBinus>
            </div>
          </CardFooter>
        </Card>
      </GroupingComponent>
    </BasePage>
  );
}
