import React from "react";
import { Disclosure } from "@headlessui/react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import Topiccard from "./Topiccard";

function Modulecard({ title = "Title", topics = [] }) {
  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex min-h-fit w-full min-w-fit items-center justify-start gap-4 whitespace-nowrap rounded-lg py-2 text-left text-xl font-medium text-purple-900">
              <div
                className={`flex items-center justify-start gap-4 duration-300 ${
                  open ? "text-3xl font-bold" : ""
                } mr-5 text-first`}
              >
                <UilAngleRightB
                  className={`${
                    open ? "rotate-90 scale-150 transform" : ""
                  } h-5 w-5 text-first`}
                />
                <span className={`${open ? "transform" : ""} text-first`}>
                  {title}
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-2  pb-2 text-sm text-gray-500">
              {topics.map((item) => (
                <Topiccard title={item.title} key={item.id} />
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Modulecard;

// example Call
{
  /* <Modulecard topics={[{ id: 1, title: "Internet" },{ id: 2, title: "Internet2" }]} /> */
}
