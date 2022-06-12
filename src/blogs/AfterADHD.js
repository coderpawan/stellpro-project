import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/AfterADHD1.png";
import Pic2 from "../images/AfterADHD2.png";
import Pic3 from "../images/AfterADHD3.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiSignalTowerFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import Recommended from "../data/RecommendedData";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const AfterADHD = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="text-3xl font-bold my-8">
            What can you do if your child has been diagnosed with ADHD?
          </div>
          <img src={Pic1} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Global estimates of ADHD in children and adolescents range from 1%
            to 11%. A recent study in India found the prevalence of ADHD among
            children and adolescents as 7.1%1.{" "}
          </div>
          <div className="my-4">
            If you're the parent of a newly diagnosed kid, you may be unsure of
            what to do next. Knowing the diagnosis is essential, but knowing
            what it means for your kid and what tools and resources are
            available, can help you put the right supports in place.
          </div>
          <div className="my-4">
            Here are a few steps you can follow once your child receives an ADHD
            diagnosis.{" "}
          </div>
          <div className="text-2xl font-bold">
            1. &nbsp;&nbsp;Learn everything you can
          </div>
          <div className="my-4">
            You may have heard of ADHD and have a general idea of what it
            signifies. Yet, chances are your information is incorrect. Most
            people think of ADHD as a phrase for hyperactive youngsters who
            can't sit still. However, ADHD may affect children in various ways,
            impacting more than one aspect of their lives. It can cause
            behavioral and emotional problems. There may also be numerous
            misconceptions concerning ADHD, particularly academic achievement
            and treatment.{" "}
          </div>
          <div className="my-4">
            So do your homework and empower yourself with information. It will
            allow you to assist your youngster better.
          </div>
          <div className="text-2xl font-bold">
            2. &nbsp;&nbsp;Communicate with your child
          </div>
          <div className="my-4">
            Just like you may have conflicting feelings about the diagnosis,
            your child may as well. Some children may be too young to comprehend
            what this means, while older children may be glad to understand why
            they feel the way they do. In any case, your youngster may be
            interested in learning more.{" "}
          </div>
          <div className="my-4">
            Allow for plenty of conversations and be gentle with your child's
            anxieties, questions, and ideas. Giving them the information, they
            require will help them better grasp their diagnosis.
          </div>
          <div className="text-2xl font-bold">
            3. &nbsp;&nbsp;Consult a neuropsychologist about your child
          </div>
          <div className="my-4">
            Meet with the neuropsychologist to go over the exam findings and
            discuss particular modifications and behavioral tactics that will
            assist your kid at school and home.
          </div>
          <div className="my-4">
            Your neuropsychologist is a fantastic place to start looking for
            therapist referrals. Seek a recommendation for a
            cognitive-behavioral therapist.{" "}
          </div>
          <div className="text-2xl font-bold my-4">
            4. &nbsp;&nbsp;Consult with the school and get support
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Most children with ADHD are diagnosed after they begin formal
            schooling. Therefore, you must collaborate closely with the school
            to assist your child.{" "}
          </div>
          <div className="my-4">
            To begin, request a meeting with your child's school. Ask your
            child’s psychologist, behavioral therapist or occupational therapist
            to help create a support plan for them. If possible, include the
            professionals working with your child in the meeting. Alternatively,
            you can carry their documented support plan and recommendation This
            might involve making minor adjustments to their educational
            schedule, supporting their need for exercise and breaks, or
            adjusting the sitting arrangement to reduce distractions. Many
            schools also offer special educators who may assist your kid with
            academic difficulties. Your kid will benefit from the assistance
            provided by their instructors and special educators.
          </div>
          <div className="text-2xl font-bold">
            5. &nbsp;&nbsp;Investigate treatment alternatives
          </div>
          <div className="my-4">
            Your child may require treatment, medicine, or a combination of the
            two depending on the severity of their symptoms. Treatment options
            for your child include behavior modification, social skills
            training, lifestyle adjustments, family counseling, and exercise.{" "}
          </div>
          <div className="my-4">
            Collaborate carefully with your kid's therapist to ensure that
            therapy is helpful for your child. You may bring out the most
            significant outcome for your child by following the therapist's
            lead, noting how your child responds to therapy and tracking their
            growth.
          </div>
          <div className="text-2xl font-bold">
            6. &nbsp;&nbsp;Participate in an ADHD support group
          </div>
          <div className="my-4">
            Listening to other parents and families about how they overcame
            similar difficulties might make you feel less alone. Others have
            already walked in your shoes, and it might be reassuring to know
            that it may not always seem as terrifying and unfamiliar as it does
            at first. If there are no local support groups, many online ones are
            as supportive and helpful.
          </div>
          <div className="text-2xl font-bold my-4">
            7. &nbsp;&nbsp;Modify surroundings to match the demands of your
            child.
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Understand how ADHD uniquely impacts your child. Pay attention to
            their issues and attempt to discover answers. Changes in your daily
            routine, creating time for exercise and sports, limiting
            distractions in your house, avoiding screen time, or helping your
            kid in specific social settings are all examples of what you can do.
            As executive function and time management skills are impacted, a
            visual scheduler is a great tool to keep track of daily activities.
            All in all, you must learn about your child and prioritize the minor
            improvements that will benefit them.
          </div>
          <div className="text-2xl font-bold my-4">Final Thoughts</div>
          <div className="my-4">
            Receiving a diagnosis might be overwhelming for both you and your
            child. With the proper assistance and intervention, your kid will be
            able to cope with their difficulties much better.
          </div>
          <div className="my-4">
            You can also seek professional help for more details guidance,
            setting goals, and how you and your child would like to accomplish
            them.
          </div>

          <div className="flex mt-12">
            <div className="">Share This With Your Friends</div>
            <FacebookShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-900 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <FaFacebookF className="relative top-1 text-blue-900" />
                <div className="ml-3 text-blue-900 font-bold">SHARE</div>
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-400 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsTwitter className="relative top-1 text-blue-400" />
                <div className="ml-3 text-blue-400 font-bold">TWEET</div>
              </div>
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-emerald-600 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsWhatsapp className="relative top-1 text-emerald-600" />
                <div className="ml-3 text-emerald-600 font-bold">SHARE</div>
              </div>
            </WhatsappShareButton>
            <div className="flex cursor-pointer border-solid border-orange border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
              <RiSignalTowerFill className="relative top-1 text-orange" />
              <div className="ml-3 text-orange font-bold">SUBSCRIBE</div>
            </div>
          </div>
        </div>
        <div className="w-[27%]">
          <div className="border-solid border-2 border-gray-200 rounded-lg ml-5">
            <div className="flex relative left-3 mt-3 mb-2">
              <IoDocumentTextOutline className="text-orange-400" />
              <div className="text-[12px] font-bold text-orange-400 ml-1">
                RECOMMENDED CONTENT
              </div>
            </div>
            <div className="h-[2px] bg-gray-200 w-[90%] relative left-3"></div>
            {Recommended.map((props) => {
              return (
                <div className="flex my-3">
                  <img
                    src={props.image}
                    alt=""
                    className="h-14 relative left-3"
                  />
                  <div className="ml-5 text-[12px] mr-14 text-blue-500">
                    {props.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AfterADHD;
