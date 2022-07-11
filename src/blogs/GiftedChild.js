import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/giftedchild1.png";
import Pic2 from "../images/giftedchild2.png";
import Pic3 from "../images/giftedchild3.png";
import Pic4 from "../images/giftedchild4.png";
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

const GiftedChild = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              10 Best Special Needs Schools in India
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="my-4" />
          <div className="my-4">
            Those who are inexperienced with gifted education may feel that
            gifted children stand out due to their outstanding grades or
            achievements. However, many people who work with gifted children
            recognize that they are exceptional for many other reasons. Their
            odd sense of humour, high curiosity, or refusal to sit quietly in
            class to repeat mathematical facts when they would rather be
            investigating the meaning of infinity are some examples of how these
            kids are different.{" "}
          </div>
          <div className="my-4">
            Looking for gifted characteristics in youngsters can give parents
            and educators a more in-depth knowledge of these children's
            personalities and how to best support and nurture their unique
            skills.
          </div>
          <div className="text-2xl font-bold my-4">What is Giftedness?</div>
          <div className="my-4">
            Giftedness is, at its foundation, a neurological distinction that
            allows gifted children to have distinct intellectual, academic, and
            social-emotional development path than neurotypical individuals. It
            means that a child is extremely talented and has a significantly
            higher capacity to perform in a particular field, like academics or
            music, compared to his or her peers. A gifted child with higher
            intellectual capabilities is considered to have an IQ greater then
            130.{" "}
          </div>
          <div className="text-2xl font-bold my-4">
            What are the Signs of Giftedness?
          </div>
          <div className="text-xl font-bold my-4">
            1. Ability to perceive things from several viewpoints
          </div>
          <div className="my-4">
            Gifted kids typically come up with new approaches to a situation or
            challenge. They use their abstract thinking ability and creativity
            to find unique perspectives and answers to problems, even when there
            is an easier way to handle them.
          </div>
          <div className="text-xl font-bold my-4">
            2. High language proficiency
          </div>
          <div className="my-4">
            Because of their high language proficiency, gifted children
            sometimes prefer talking to adults over classmates their age. They
            may have a sophisticated vocabulary and the capacity to express
            themselves precisely. They may also speak rapidly because of the
            constant flow of thoughts in their heads that they want to convey.
            Allowing talented children to communicate with their intellectual
            peers and adults daily can help further improve their language
            proficiency.
          </div>
          <div className="text-xl font-bold my-4">
            3. Early and quick learning{" "}
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="my-4">
            One of the most common characteristics of gifted children is early
            and rapid learning. Many have a strong recall, connecting prior
            knowledge with new information, allowing them to learn new concepts
            more quickly. Furthermore, they can swiftly absorb new information,
            especially on complex issues. This frequently makes them appear
            distracted or bored in traditional classroom learning, which moves
            too slowly to keep them intellectually engaged.
          </div>
          <div className="text-xl font-bold my-4">
            4. Critical of oneself and others{" "}
          </div>
          <div className="my-4">
            Gifted students are frequently regarded as critical of others and
            themselves. Because of their exceptional skills to comprehend a wide
            range of things at a fast pace, they are often less tolerant of
            others who are unable to do so. Therefore, their demands to speed up
            the pace of learning may be seen as an attempt to control the
            classroom or even as bullying.{" "}
          </div>
          <div className="text-xl font-bold my-4">5. Overexcitabilities</div>
          <div className="my-4">
            Dabroski first stated overexcitability as a heightened reaction to a
            range of stimuli. Overexcitabilities can be psychomotor (including
            physical movement), sensuous (involving the five senses), cerebral,
            imaginative, or emotional. There are several benefits to highly
            talented overexcitability, which should be stressed so that kids may
            learn to appreciate and utilize their particular abilities.
          </div>
          <div className="text-xl font-bold my-4">
            6. Intellectual curiosity
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="my-4">
            Gifted children are not happy with merely knowing something. They
            are driven to learn the ‘why’ and ‘how’ of every piece of
            information. However, because children regularly question their
            teachers and mentors, intellectual curiosity might be seen as a
            threat to authority. Educators must encourage intellectual curiosity
            since it may be extinguished forever if it is suppressed.
          </div>
          <div className="text-xl font-bold my-4">
            7. Strong sensitivity and sense of justice
          </div>
          <div className="my-4">
            Gifted children usually struggle to comprehend real or imagined
            injustices and are very concerned about others around them. They
            also have a personal concept of equality and justice and regularly
            clash with people who do not share these values. As they try to cope
            in different group settings, where the intellectual weight is
            unfairly put on them, they may sometimes look asocial.
          </div>
          <div className="text-xl font-bold my-4">8. Quirky sense of humor</div>
          <div className="my-4">
            Gifted children frequently have a sophisticated sense of humour and
            may look dissatisfied with peers who find basic or physical humour
            amusing. They are more likely to like adult-like humor such as puns
            or sarcasm.{" "}
          </div>
          <div className="text-xl font-bold my-4">9. Persistence </div>
          <div className="my-4">
            Gifted kids are frequently tenacious in their pursuit of information
            or views. To fulfill their intense curiosity, they might become
            immediately immersed in issues or areas of interest and fall into
            metaphorical rabbit holes.{" "}
          </div>
          <div className="text-xl font-bold my-4">10. Perfectionism </div>
          <img src={Pic4} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="my-4">
            Gifted kids frequently hold themselves to an exceptionally high
            standard. In certain circumstances, these kids think that they must
            excel at everything. They may become frustrated when they don't get
            an A or thrive in extracurricular activities. Providing meaningful
            opportunities to push talented children without imposing punishments
            for failing to achieve will teach them to prioritize growth above
            perfection.{" "}
          </div>

          <div className="text-2xl font-bold my-4">Final Thoughts</div>
          <div className="my-4">
            While there are a few commonalities in giftedness, it is critical to
            remember that there is no one-size-fits-all definition. Some
            youngsters excel in several areas, while others may be talented in a
            particular field and struggle in others. Furthermore, giftedness is
            dynamic and not static, and it should be identified as soon as
            possible for abilities and talents to be fostered and developed.
          </div>
          <div className="my-4">
            If you feel your child is gifted, consult with their doctor, as well
            as their teachers and administrators. Early identification of your
            child's abilities can help you and your child’s teachers create an
            educational program that can help them reach their maximum
            potential.
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

export default GiftedChild;
