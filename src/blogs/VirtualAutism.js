import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/virtualautism1.png";
import Pic2 from "../images/virtualautism2.png";
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

const VirtualAutism = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="text-4xl my-4 font-bold">What is Virtual Autism?</div>
          <img src={Pic1} alt="" className="" />
          <div className="my-4">
            Virtual autism is a disorder occurring in young children upto age
            four and linked to extended exposure to mobile, tablets, television
            or screens. The symptoms of virtual autism are identical to classic
            autism; however, there is a significant reduction in symptoms when
            the affected children stop using electronic gadgets and instead
            engage in face-to-face interaction, reading, and playing with
            caregivers, other children, and non-electronic toys.{" "}
          </div>
          <div className="my-4">
            It is important to note that virtual autism is currently not a
            medical term and is therefore not a part of any diagnostic manual or
            assessment. However, it is widely known and documented that
            prolonged screen exposure in young children can lead to language
            delays, inattention and hyperactivity.{" "}
          </div>
          <div className="my-4">
            This article will look at the signs and symptoms of virtual autism
            as well as some suggestions to curb exposure to digital media.{" "}
          </div>
          <div className="text-2xl font-bold my-4">
            Is it true that screen time causes autism?
          </div>
          <div className="my-4">
            There is a strong link between ASD (Autism Spectrum Disorder) and
            excessive screen use. Studies have shown that children with virtual
            autism show localised alterations in their brains due to recurrent
            non-social images and noises from screen use. Furthermore,
            youngsters who spend their days engaging in excessive screen time
            may lack enough real-life social engagement. This can lead to them
            mimicking the robotic output of electronic equipment rather than
            acquiring typical human-to-human social cues. As difficulties with
            social and communication behaviours define autism, this disorder has
            the potential to manifest as ASD.
          </div>
          <div className="text-2xl font-bold my-4">
            What are the Signs and Symptoms of Virtual Autism?
          </div>
          <div className="my-4">
            There is no neurological system development in children diagnosed
            with virtual autism due to a lack of psychological, motor, sensory,
            emotional, and psychosocial stimulation. So, the symptoms of this
            disease do not arise due to the loss of neural linkages. Instead,
            they occur because of the absence or reformation of neural linkages
            as a result of insufficient stimulation.{" "}
          </div>
          <div className="my-4">
            Some signs and symptoms of virtual autism include:
          </div>
          <div className="my-4">
            • inexpressive or blank facial expressions{" "}
          </div>
          <div className="my-4">
            • not paying attention to family or friends
          </div>
          <div className="my-4">• avoiding eye contact with other</div>
          <div className="my-4">• not replying when their name is called</div>
          <div className="my-4">• extremely short attention spans</div>
          <div className="my-4">
            • being unaware of their environment even when surrounded by others
          </div>
          <div className="text-2xl font-bold my-4">
            Restricting the time children spend in virtual environments
          </div>
          <img src={Pic2} alt="" className="" />
          <div className="">
            Parents should follow the suggestions given below to restrict the
            time their child spends in front of any screen:
          </div>
          <div className="my-4">
            • Create a daily timetable for the child to follow.{" "}
          </div>
          <div className="my-4">
            • Establish restrictions for the child's TV, computer, and phone
            usage.{" "}
          </div>
          <div className="my-4">
            • Reward the youngster for adhering to the daily schedule.
          </div>
          <div className="my-4">
            • Create a unique area in the house filled with fascinating items
            that can be utilised when the child becomes bored and wants to play
            on the mobile or tablet.{" "}
          </div>
          <div className="my-4">
            • Turn off the TV and computer while eating, doing chores or
            studying.
          </div>
          <div className="my-4">
            • Ensure that the child indulges in some physical activity, such as
            walking or playing in the park.{" "}
          </div>
          <div className="my-4">
            • Reduce the number of electronic gadgets in the house.{" "}
          </div>
          <div className="text-2xl font-bold my-4">
            Studies on Virtual Autism
          </div>
          <div className="my-4">
            The study conducted by the Center for Children with Autism in
            Romania shows that 90 percent of the children (ages 2-3 years) who
            are diagnosed with autism had a common trigger factor of
            overwatching television or other types of virtual content.{" "}
          </div>
          <div className="my-4">
            {" "}
            Another literature review, ‘Screen Media and Autism Spectrum
            Disorder’, concluded that “Correlates and long-term consequences of
            early screen exposure (before the age of 3 years) remain largely
            unexamined.”
          </div>
          <div className="my-4">
            Studies have also shown that children with prolonged exposure to
            screens have less caregiver-child interaction. Thus, is it possible
            what is considered virtual autism may not just be due to increased
            screen exposure but also reduced parent and child play and social
            interaction.
          </div>
          <div className="my-4"></div>
          <div className="text-2xl my-4 font-bold">Final Thoughts</div>
          <div className="my-4">
            Parents can be unaware of the link between the emergence of
            autistic-like traits and screen exposure. If such symptoms arise,
            the wisest course of action is to "unplug" from technology. Instead,
            encourage your children to go out and explore. Do not baby talk,
            speak to them in correct phrases or sentences. Spend time making art
            or playing your childhood games with them. Such actions may
            safeguard their minds and help prevent virtual autism.
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
              <div className="flex cursor-pointer border-solid border-green-600 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsWhatsapp className="relative top-1 text-green-600" />
                <div className="ml-3 text-green-600 font-bold">SHARE</div>
              </div>
            </WhatsappShareButton>
            <div className="flex cursor-pointer border-solid border-orange-400 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
              <RiSignalTowerFill className="relative top-1 text-orange-400" />
              <div className="ml-3 text-orange-400 font-bold">SUBSCRIBE</div>
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

export default VirtualAutism;
