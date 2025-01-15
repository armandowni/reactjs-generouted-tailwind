import styled from "styled-components";
import tw from "twin.macro";

export const BasePage = styled.div`
  ${tw`flex`}
  ${tw`flex-wrap`}
  ${tw`px-3`}
  ${tw`gap-3`}
`;

export const GroupingComponent = styled.div`
  ${tw`w-full`}
  ${tw`flex`}
  ${tw`flex-col`}
  ${tw`px-3`}
  ${tw`gap-5`}
  
  .cardForm {
    ${tw`px-3`}
    ${tw`py-3`}
    ${tw`rounded-lg`}
    ${tw`bg-[#FAFAFA]`}
    ${tw`border-[1px]`}
    ${tw`border-[#CCCCCC]`}
  }

  & span {
    ${tw`text-gray-300`}
  }

  .groupComponent {
    ${tw`w-full`}
    ${tw`flex`}
    ${tw`px-3`}
    ${tw`gap-3`}
  }
`;

const Daisy = () => (
  <div className="bg-gradient-to-br from-gray-400 to-gray-600 bg-clip-text text-4xl font-bold text-transparent lg:text-8xl">
    NEXT UI
  </div>
);

const Next = () => (
  <div className="bg-gradient-to-br from-gray-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent lg:text-8xl">
    REACT JS
  </div>
);

export const TestTitle = () => (
  <div id="header" className="flex flex-col justify-center pt-8 sm:pt-0 w-full">
    <span className="text-center text-xl font-extrabold">Template project with</span>
    <div className="flex flex-col items-center justify-center gap-0 lg:flex-row lg:gap-2">
      <a
        className="flex justify-center sm:pt-0"
        href="https://nextjs.org"
        target="_blank"
        rel="noreferrer">
        <Next />
      </a>
      <span className="text-6xl">+</span>
      <a
        className="flex justify-center sm:pt-0"
        href="https://daisyui.com/"
        target="_blank"
        rel="noreferrer">
        <Daisy />
      </a>
    </div>
  </div>
);
