import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/SignsADHD.png";
import Pic2 from "../images/SignsADHD2.png";
import Pic3 from "../images/SignsADHD3.png";
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

const SignofADHD = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              All About ADHD in Girls
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="w-[60%] my-4" />
          <div className="my-4">
            Attention deficit hyperactivity disorder (ADHD), a prevalent
            pediatric disorder, contains inattentive, hyperactive, or impulsive
            behavior patterns. Many misconceptions portray ADHD as a disorder
            that primarily affects boys. Girls with ADHD, those who are
            considered introverted and shy or those who only display
            inattentiveness, are frequently overlooked in presence of loud,
            restless boys who exhibit the characteristic ADHD behavior.{" "}
          </div>
          <div className="my-4">
            Girls who do not receive the proper diagnosis are unlikely to
            receive enough support. As a result, the difficulties girls face at
            home and school frequently continue into adulthood, significantly
            impacting career, social connections, and general quality of life.
          </div>
          <div className="text-2xl font-bold">
            How girls present ADHD vs. how boys do
          </div>
          <div className="my-4">
            Boys are diagnosed with ADHD nearly three times more frequently than
            girls, while the ratio of adult men to females is closer to
            one-to-one. Researchers believe this is due to girls being
            underdiagnosed rather than ADHD being more frequent in boys.
          </div>
          <div className="my-4">
            The primary reason for this is that symptoms present differently in
            different genders.{" "}
          </div>
          <div className="my-4">
            • Girls more often exhibit inattentive signs. Furthermore, they tend
            to adopt compensatory adaptive behaviors and coping mechanisms to
            conceal their problems.
          </div>
          <div className="my-4">
            • Boys are more likely to outwardly exhibit impulsive and
            hyperactive signs.
          </div>
          <div className="my-4">
            Here is a list of signs of ADHD in girls vs. boys:{" "}
          </div>
          <img src={Pic2} alt="" className="" />
          <div className="my-4">
            Girls with ADHD are frequently misdiagnosed with another illness,
            such as anxiety or depression, or the ADHD is ignored when a
            concomitant disease exists. We'll look at why in the following
            section.
          </div>
          <div className="text-2xl font-bold my-4">
            Why is ADHD overlooked in girls?
          </div>
          <div className="my-4">
            In general, boys with ADHD are more conspicuous. This perpetuates
            the stereotype that a child with ADHD is a boy who "acts up" in
            class and is always on the go. As girls with ADHD are often less
            disruptive, it is possible that their difficulties are not as
            visible. For example, daydreaming will not generate red signs that
            are impossible to detect or ignore, like repeated interruptions or
            the inability to stay sitting does.{" "}
          </div>
          <div className="my-4">
            Furthermore, even when girls exhibit symptoms identical to boys,
            ADHD may be overlooked or dismissed because they do not fit the
            picture of a typical ADHD youngster. Several studies prove this
            fact.{" "}
          </div>
          <div className="my-4">
            Two trials were conducted in which instructors were given brief
            ADHD-like descriptions, but the child's name and pronouns were
            changed. When the report included male names and pronouns,
            instructors in the research were more likely to propose the kid be
            referred for extra help and be more fit for therapy.{" "}
          </div>
          <div className="text-2xl font-bold">ADHD risks in girls</div>
          <div className="my-4">
            This lack of awareness among the people can lead to girls not
            getting the proper treatment they require, leading to several
            complications.{" "}
          </div>
          <div className="my-4">
            According to Dr. Ellen Littman, co-author of Understanding Girls
            with ADHD, if a girl with ADHD is not diagnosed or treated as she
            approaches adolescence, she may become anxious and depressed and
            face several adjustment problems later in life. Furthermore,
            according to Dr. Littman, women with ADHD are more prone to have
            drug or alcohol addiction and engage in risky sexual conduct.
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[10%]" />
          <div className="my-4">
            Some other issues girls with ADHD may face include:
          </div>
          <div className="">• Poor self-esteem</div>
          <div className="">• Anxiety, depression</div>
          <div className="">• Bulimia or other eating disorders</div>
          <div className="">• Long-term stress</div>
          <div className="">
            • Greater risk of stress-related conditions such as fibromyalgia
          </div>
          <div className="">• Underachievement</div>
          <div className="my-4">
            These variables can contribute to issues at work and in
            relationships and underachievement in other areas of life.
          </div>
          <div className="text-2xl font-bold my-4">
            When should females be diagnosed with ADHD?
          </div>
          <div className="my-4">
            It is a great idea to get help when you observe your child
            experiencing challenges that don't appear to be improving. Even if
            they do not have ADHD, a competent therapist can assist in
            determining what is causing their symptoms.
          </div>
          <div className="my-4">
            Interventions such as therapy, medication, counseling, and school
            support might be implemented.
          </div>
          <div className="text-2xl my-4">Final Thoughts</div>
          <div className="">
            According to earlier estimates from 2007, ADHD in females stays
            untreated between 50 and 75 percent of the time. However, greater
            knowledge of the particular ways in which females experience ADHD
            symptoms can assist them in receiving the appropriate diagnosis and
            treatment. This assistance may significantly impact their academic
            achievement and personal connections, not to mention their entire
            mental health and well-being.
          </div>
          <div className="my-4">
            Just knowing your child has ADHD can lift her weight of guilt and
            improve her self-esteem. It can also liberate her from the negative
            labels of "spacey," "unmotivated," "dumb," or "lazy." Your child
            isn't any of those things; she has ADHD.{" "}
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

export default SignofADHD;
