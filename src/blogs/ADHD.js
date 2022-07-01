import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/ADHD1.jpg";
import Pic2 from "../images/ADHD2.jpg";
import Pic3 from "../images/ADHD3.png";
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

const ADHD = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="flex">
            <div className="text-3xl my-4 font-bold">
              A Comprehensive Guide to ADHD Treatment
            </div>
            <div className="ml-20 relative top-6"> ~ Posted on 23 Jun 2022</div>
          </div>
          <div className="">
            The most effective treatment options for attention deficit
            hyperactivity disorder (ADHD) combine multiple complementary
            therapies and treatments to lessen symptoms. This optimum mix may
            include ADHD medication, exercise, behavioral therapies, and dietary
            changes. Other options for wholistic improvement include taking
            vitamin supplements, nature walks, meditation and practicing
            mindfulness.
          </div>
          <div className="my-4">
            Discuss your options with your child's doctor as soon as possible.
            If you wish to use medications, ask your doctor about their
            experience with complementary therapy choices. If you do not want to
            give your kid medicine, seek the advice of a specialist who
            specializes in the therapies.{" "}
          </div>
          <div className="text-2xl my-4 font-bold">
            Treatment options for ADHD
          </div>
          <div className="text-2xl font-bold ml-6">
            1. &nbsp;&nbsp;Behavioral therapies
          </div>
          <img src={Pic1} alt="" className="my-3 w-[60%] relative left-[10%]" />
          <div className="my-6">
            Medication affects the brain on a neurological level. In contrast,
            behavior therapy tackles particular behaviors such as teaching the
            kid how to manage their time, reduce aggression, and build routines
            and structures. Behavior therapy can help modify behavior by
            practicing the following techniques:
          </div>
          <div className="ml-8">
            • Creating an atmosphere that encourages appropriate conduct
          </div>
          <div className="ml-8">
            • Giving positive reinforcement and feedback for acceptable behavior
            and progress
          </div>
          <div className="ml-8">
            • Creating explicit outcomes for undesirable conduct may include
            withholding reward/praise, ignoring wrong behavior, or imposing
            negative repercussions and consequences.{" "}
          </div>
          <div className="ml-8">• Maintaining consistency in expectations</div>
          <div className="my-6">
            This form of therapy, which is frequently used in conjunction with
            medication, is carried out by a therapist who works with your kid to
            identify problem behaviours , the root cause triggering these
            behaviours and develop strategies for modifying them. It also
            includes training for parents and, in some cases, instructors. The
            aim is to concentrate on addressing one behavior at a time so that
            parents, therapists and teachers can identify which particular
            strategies are effective.
          </div>
          <div className="my-6">
            Cognitive-behavioral therapy (CBT) is an example of the therapy
            options available for children with ADHD. CBT is a psychotherapy
            treatment that teaches children to recognize and alter negative or
            unpleasant thinking patterns that impact their behaviour and
            emotional well-being.
          </div>
          <div className="my-6">
            It is goal-oriented and tries to transform negative thought patterns
            and how a patient thinks about herself, her talents, and her future.
          </div>
          <div className="text-2xl font-bold ml-6">
            2. &nbsp;&nbsp;Medications
          </div>
          <img src={Pic2} alt="" className="my-3 w-[60%] relative left-[10%]" />
          <div className="my-5">
            Medication is the most recommended and commonly used treatment for
            ADHD symptoms for a straightforward reason: studies have shown that
            stimulant medication is the most effective therapy. Medication helps
            at least 80% of patients with ADHD.{" "}
          </div>
          <div className="my-4">
            The American Academy of Child and Adolescent Psychiatry (AACAP)
            clinical practice guidelines recommend medication as the primary
            treatment for ADHD in school-going children, basis a comprehensive
            review of 78 studies on ADHD treatment that "consistently supported
            the superiority of drug involved treatments."
          </div>
          <div className="text-2xl font-bold ml-6">
            3. &nbsp;&nbsp;Alternative therapy
          </div>
          <div className="font-bold ">Supplements and Foods</div>
          <div className="my-6">
            Changing your child's diet to include more ADHD-friendly nutrients
            like omega-3, zinc, iron, vitamin D and protein can help the brain
            operate optimally and manage mood fluctuations. Limiting sugar and
            artificial additives, like preservatives and food colouring, can
            lower hyperactivity in some children.
          </div>
          <div className="font-bold ">Exercise</div>
          <img src={Pic3} alt="" className="my-3 w-[60%] relative left-[10%]" />
          <div className="my-6">
            According to some studies, 20-30 minutes of exercise before school
            can improve their attention and emotional regulation in school.
            Walking or jogging for 30 minutes four to five times a week is
            sufficient exercise.
          </div>
          <div className="font-bold">Yoga and Mindful Meditation for ADHD</div>
          <div className="my-6">
            Attention to inner thoughts, emotions, body sensations, and rhythms
            is what attentive awareness, or mindfulness, entails. Gaining an
            understanding of what thoughts are going on flowing in the mind each
            moment and practicing breathing techniques can be used to promote
            well-being, particularly psychological wellbeing. Similar strategies
            have been used to treat high blood pressure, chronic pain, anxiety,
            and mood problems.
          </div>
          {/* <div className="text-3xl my-4">Final Thoughts</div>
          <div className="">
            If your child is struggling to meet age-appropriate developmental
            goals, fine and gross motor skills, or has sensory processing
            issues, please get in touch with the appropriate professionals to
            seek help. You can schedule a consultation at the earliest to learn
            how they can help your child overcome these difficulties and adapt
            to their surroundings.
          </div> */}

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

export default ADHD;
