import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OccupationalTherapy from "../images/occupational therapy.jpg";
import Picture2 from "../images/Picture2.jpg";
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

const BlogDetails = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <img src={OccupationalTherapy} alt="" className="" />
          <div className="text-4xl my-4">
            Does my child need Occupational Therapy?
          </div>
          <div className="text-lg">
            A child's occupation is to play, grow and learn new skills.
            Unfortunately, some children have difficulty learning critical life
            skills due to physical, cognitive, and sensory delays or
            impairments. They frequently have problems with sensory processing,
            fine or gross motor skills, visual-perceptual skills, and other
            tasks. In such cases, occupational therapy for children can have a
            significant positive effect.
          </div>
          <div className="text-3xl my-4">What is Occupational Theory? </div>
          <div className="text-lg">
            Occupational therapy (OT) teaches individuals how to adapt to their
            surroundings through online and in-person sessions. Furthermore, it
            is responsible for the child's physical, psychological, social, and
            environmental requirements.{" "}
          </div>
          <div className="text-3xl my-4">
            What Is the Purpose of Pediatric Occupational Therapy?
          </div>
          <div className="">
            <div className="text-lg ">
              The best occupational therapists evaluate and treat children
              holistically. A significant part of their treatment is determining
              the source of their limits or delays, particularly in social
              development, self-care routines, fine and gross motor abilities,
              and cognitive skills. In other words, the therapy approach enables
              children to learn important life skills and helps them grow into
              well-functioning, healthy individuals. Occupational therapy serves
              many purposes.
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                Pediatric occupational therapy can help develop a child's fine
                motor skills to grab, hold, and release objects such as toys and
                balls. It also enhances children's writing and computer skills.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                Occupational therapy helps improve children's eye-hand
                coordination so that they can play games like puzzles, throw and
                catch objects, colour and write and in older children, quickly
                copy text from the blackboard or computer screen
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                Lastly, occupational therapy teaches children to manage their
                anger, disappointment, and frustration, which in turn can help
                them learn outstanding social skills and constructive
                behaviours.
              </span>
            </div>
          </div>
          <div className="text-3xl my-4">
            Signs That Your Kids May Require Occupational Therapy{" "}
          </div>
          <div className="">
            <div className="text-lg">
              The signs and symptoms given below may indicate that your child
              may require occupational therapy.{" "}
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
            <div className="ml-16">
              <span className="text-4xl relative bottom-1">.</span>
              <span className="text-lg">
                It helps children learn important life skills such as brushing
                their teeth, eating and bathing.
              </span>
            </div>
          </div>
          <img
            src={Picture2}
            alt=""
            className="my-10 h-[400px] relative left-[25%]"
          />
          <div className="text-3xl my-4">
            How do Occupational Therapy Specialists Help a Child's Skills?
          </div>
          <div className="text-lg">
            At first, paediatric occupational therapy professionals talk to
            children and their parents and study their interactions. For
            example, they may question the child's daily routines, how much time
            the parents spend with their child, etc. An assessment follows this
            to understand specific areas of concern or delays. Based on this,
            they provide the child with tailored or family-centred assistance.
            The therapy sessions last 30-60 min at a frequency of generally 1-3
            sessions a week. The therapy also requires family members to assist
            the child in learning new abilities. Pediatric occupational therapy
            can also be very beneficial for a child with sensory processing
            issues. Children with difficulty in processing sensory information,
            are more prone to overreact to what they hear, see, taste, touch, or
            smell. This can cause meltdowns or hyperactivity. If the child is
            showing sensory processing issues, then sensory profiling may also
            be part of the assessment. Lastly, occupational therapists create
            sensory diet programs for children, including physical exercises and
            modifications tailored to provide the sensory input they require.
          </div>
          <div className="text-3xl my-4">
            What Is the Best Way to Explain Occupational Therapy to a Child?
          </div>
          <div className="text-lg">
            Talking freely with your older children about occupational therapy
            is preferable to protecting them from what is going on. It is
            essential to put in the effort to explain to your children why
            treatment is necessary for them and how it can benefit their entire
            life. It is important to remember to reward your children after each
            therapy session and noteworthy achievements. It can help them
            comprehend the significance of treatment and motivate them to
            cooperate with the therapist and participate in the process.
          </div>
          <div className="text-3xl my-4">Final Thoughts</div>
          <div className="">
            If your child is struggling to meet age-appropriate developmental
            goals, fine and gross motor skills, or has sensory processing
            issues, please get in touch with the appropriate professionals to
            seek help. You can schedule a consultation at the earliest to learn
            how they can help your child overcome these difficulties and adapt
            to their surroundings.
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

export default BlogDetails;
