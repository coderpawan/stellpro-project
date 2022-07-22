import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/babies1.png";
import Pic2 from "../images/babies2.png";
import Pic3 from "../images/babies3.png";
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
import { Link } from "react-router-dom";

const Babies = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              What are the early signs of autism in babies?
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="my-4" />
          <div className="my-4">
            Watching your child grow is one of life’s most incredible pleasures.
            While each kid grows at their own pace, failure to meet critical
            developmental milestones may raise red flags. According to Thomas
            Frazier, Ph.D., a clinical psychologist and chief scientific officer
            of Autism Speak, some parents identify autism spectrum disorder
            (ASD) indicators when their infant is 6-12 months old. Hence, here
            are the early indicators of autism in newborns so that you can
            determine if your child has it.{" "}
          </div>
          <div className="my-4">
            Autism does not alter the physical appearance of a newborn. Instead,
            the disorder impacts how newborns communicate and interact with
            their surroundings. Autism is referred to as a "spectrum" disorder
            since the signs in each individual can vary greatly. If you see
            developmental issues or delayed milestones, you should discuss them
            with your child's doctor or a healthcare expert.
          </div>
          <div className="text-2xl font-bold my-4">
            Signs of Autism in Babies
          </div>
          <div className="font-bold">Dropping eye contact</div>
          <div className="my-4">
            Babies make eye contact with other individuals from a very young
            age. Infants can generally detect faces and initiate eye contact by
            two months. Later, eye contact becomes a means of developing social
            interactions and learning about their environment. Researchers have
            discovered that newborns with autism spectrum disorder (ASD) begin
            making less eye contact at about two months of age.{" "}
          </div>
          <div className="font-bold">Little pointing or gesticulation</div>
          <div className="my-4">
            Babies typically learn to gesture before they can speak. Gestures
            are one of their first modes of communication. Autistic babies and
            toddlers often point and gesture far less than children with
            neurotypical development. A lack of pointing might sometimes also
            signal a verbal deficit.
          </div>
          <div className="my-4">
            When an infant's gaze does not follow you when you point to
            something, this is another sign of a developmental discrepancy. This
            ability is referred to as "joint attention." Joint attention is
            frequently reduced in autistic children.
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%]" />
          <div className="font-bold">Limited Communication</div>
          <div className="my-4">
            Limited or absent communication, such as a lack of reaction to their
            name, a lack of gestures, and language difficulties, are significant
            signs of autism. Well-known signs related to communication in babies
            are:
          </div>
          <div className="">
            • A baby should start making noises, babbling, or cooing at four
            months of age.
          </div>
          <div className="">
            • Babies frequently begin to respond to their names around six
            months.
          </div>
          <div className="my-4">
            If your baby is significantly delayed on these milestones, your baby
            may be at risk of developmental disorder.{" "}
          </div>
          <div className="font-bold my-4">
            Facial expressions with less emotion.
          </div>
          <div className="my-4">
            Facial expressions are a nonverbal way to express ideas and
            emotions.
          </div>
          <div className="my-4">
            Although research on emotional expression in autistic newborns is
            sparse, researchers have discovered that autistic children
            demonstrate less emotion through facial expressions than children
            with typical development in studies, including school-age children.
          </div>
          <div className="my-4">
            That doesn't necessarily imply that autistic children are less
            emotional; it just means that less of it is visible on their faces
            when they are.
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="font-bold my-4">Regression of abilities</div>
          <div className="my-4">
            Any apparent loss of abilities can identify ASD. A baby who was
            babbling, for example, may seem to chatter less with time, while an
            infant who routinely stares at caregivers may no longer engage as
            much.
          </div>
          <div className="my-4">
            Autism symptoms may become more visible as the child grows older.
            Consider the following signs:
          </div>
          <div className="">• speech echolalia delayed or non-existent</div>
          <div className="">
            • speech echolalia with no intention of communicating with others
          </div>
          <div className="">• no repeated words or phrases</div>
          <div className="">
            • repetitive motions such as flapping, hand rocking, or spinning{" "}
          </div>
          <div className="">
            • strong interest in objects other than toys or arranging toys in
            neat rows instead of playing with them as intended{" "}
          </div>
          <div className="">• difficulty with variations in daily routine</div>
          <div className="">• delayed toilet training </div>
          <div className="">• constant gastrointestinal issues</div>
          <div className="my-4">
            These symptoms may indicate a developmental disorder
          </div>

          <div className="text-2xl font-bold my-4">Final Thoughts</div>
          <div className="my-4">
            The symptoms mentioned above do not necessarily indicate that your
            kid has ASD. However, if you see autistic traits in your infant, you
            should not draw conclusions without visiting your child's medical
            professional and seeking expert guidance.
          </div>
          <div className="my-4">
            You may experience despair, rage, grief, or even relief if your
            child is diagnosed with autism. You may also be concerned about your
            child's future. With therapies and supports, autistic children can
            live happy, productive lives. They also have many qualities and
            skills that neurotypical people do not. All in all, autistic
            persons, like anybody else, may appreciate everything life has to
            offer with the right support, empathy, and understanding.
          </div>

          <div className="md:flex mt-12">
            <div className="">Share This With Your Friends</div>
            <div className="flex md:text-lg text-[10px] my-5 md:my-0">
              <FacebookShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-blue-900 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <FaFacebookF className="relative top-1 text-blue-900" />
                  <div className="md:ml-3 ml-2 text-blue-900 font-bold">
                    SHARE
                  </div>
                </div>
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-blue-400 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <BsTwitter className="relative top-1 text-blue-400" />
                  <div className="md:ml-3 ml-2 text-blue-400 font-bold">
                    TWEET
                  </div>
                </div>
              </TwitterShareButton>
              <WhatsappShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-emerald-600 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <BsWhatsapp className="relative top-1 text-emerald-600" />
                  <div className="md:ml-3 ml-2 text-emerald-600 font-bold">
                    SHARE
                  </div>
                </div>
              </WhatsappShareButton>
              <div className="flex cursor-pointer border-solid border-orange border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                <RiSignalTowerFill className="relative top-1 text-orange" />
                <div className="md:ml-3 ml-2 text-orange font-bold">
                  SUBSCRIBE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[27%]">
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
                <Link to={`${props.link}`}>
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Babies;
