import {RiReactjsLine} from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgCPlusPlus } from "react-icons/cg";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython  className="text-6xl text-sky-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <CgCPlusPlus className="text-6xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-6xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-6xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-6xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className="text-6xl text-brown-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-6xl text-black-400"/>
            </div>
        </div>
      
    </div>
  )
}

export default Technologies
