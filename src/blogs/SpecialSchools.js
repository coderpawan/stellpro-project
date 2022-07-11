import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/specialschool1.png";
import Pic2 from "../images/specialschool2.png";
import Pic3 from "../images/specialschool3.png";
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

const SpecialSchools = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              10 Signs of a gifted child
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="my-4" />
          <div className="my-4">
            Special education or special needs education refers to schooling
            catering to children who have social or physical abilities that
            differ from the norm to the point where traditional schooling
            methods must be modified. Children with behavioral, emotional, or
            cognitive impairments, hearing, intellectual, speech, visual, or
            learning challenges, and children with neurological and orthopedic
            disabilities are all served by special education.
          </div>
          <div className="my-4">
            Special education schools don't believe in "one-size-fits-all"
            education. Instead, they provide personalized intervention to fit
            each student's unique capabilities and challenges. This encompasses
            not only academic needs but also social and emotional ones. To
            achieve this purpose, special needs schools and organizations
            provide a variety of techniques and services. For example, they may
            provide:
          </div>
          <div className="">• Individual attention</div>
          <div className="">• Small-sized classes </div>
          <div className="">• Low teacher-to-student ratios</div>
          <div className="">• Teachers with specialized training</div>
          <div className="">• Self-contained classrooms</div>
          <div className="">• Rooms for resources</div>
          <div className="">• Tutoring services</div>
          <div className="">• Academic and psychological guidance</div>
          <div className="">• Aids to learning</div>
          <div className="my-4">
            Here are ten special needs schools in India (listed in no particular
            order).
          </div>
          <div className="text-2xl font-bold my-4">
            1. Academy for Severe Handicaps and Autism (ASHA), Bengaluru
          </div>
          <div className="my-4">
            Academy for Severe Handicaps and Autism (ASHA), Bengaluru, was
            founded in 1995 to develop a world-class learning environment for
            people with Autism Spectrum Disorder (ASD).
          </div>
          <div className="my-4">
            ASHA aims to provide extraordinary love, care, hope, and educational
            aid to children with special needs to help them grow and utilize
            their full potential.
          </div>
          <div className="text-2xl font-bold my-4">
            2. Tamana Autism Centre, New Delhi
          </div>
          <div className="my-4">
            Tamana Autism Centre, founded in 1985, is a non-profit volunteer
            organization that adheres to the National Open School Programme
            (NIOS). It is India's first rehabilitation and research facility for
            autistic people and the first institution to recognize autism as a
            unique disorder. Tamana Autism Centre - School of Hope in New Delhi
            was founded to aid the cause of the cognitively impaired,
            intellectually challenged, and autistic individuals.
          </div>
          <div className="text-2xl font-bold my-4">
            3. Aditya Birla Integrated School, Mumbai
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="my-4">
            The Aditya Birla Integrated School in Mumbai is a co-educational day
            school for special-needs students. The Aditya Birla Education Trust
            founded the school in 2014, and the school is connected with the
            NIOS and the Cambridge Assessment International Education (CAIE).{" "}
          </div>
          <div className="my-4">
            The school's mission is to nurture students with learning
            difficulties such as dyslexia, dysgraphia, dyscalculia, and
            attention deficit hyperactivity disorder. In addition to academics,
            the school encourages co-curricular activities and rehabilitation
            programs. The school has a multidisciplinary staff of highly
            qualified experts, educators, and therapists that use the finest
            worldwide approaches based on individual skill levels.
          </div>
          <div className="text-2xl font-bold my-4">4. Sankalp, Chennai</div>
          <div className="my-4">
            Sankalp, Chennai is a special needs education school founded in 1999
            by the Sankalp Trust, a non-profit organization. It provides
            services for children with ASD and Specific Learning Disabilities
            (SLD). Sankalp's goal is based on the notion that the primary
            foundation for the care of special needs children is a healthy,
            encouraging, supporting, and, above all, loving environment.
          </div>
          <div className="text-2xl font-bold my-4">
            5. Mata Bhagwanti Chadha Niketan (MBCN), Noida
          </div>
          <div className="my-4">
            Mata Bhagwanti Chadha Niketan (MBCN), Noida, is a special charitable
            school for mentally and physically challenged children managed by
            Ponty Chadha Foundation. MBCN Noida is fully committed and dedicated
            to rehabilitating children with intellectual disability, autism
            spectrum disorder, cerebral palsy, and other disabilities. MBCN
            works towards ensuring optimum quality of life for students,
            trainees, and their families.
          </div>
          <div className="text-2xl font-bold my-4">
            6. Alpha to Omega (ATO), Chennai
          </div>
          <div className="my-4">
            Alpha to Omega (ATO), Chennai, was founded in 1988 and is a
            co-educational day and boarding school for students aged four to
            eighteen. The school aims to construct a brighter future for
            students by concentrating on their cognitive, intellectual,
            linguistic, and emotional development. The Sri Krishna Trust
            operates the school. Apart from children's education, ATO also
            focuses on teacher education because children require appropriate
            assistance from instructors at school.{" "}
          </div>
          <div className="text-2xl font-bold my-4">
            7. Asha Kiran Special Needs School, Bengaluru
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%] my-4" />
          <div className="my-4">
            Asha Kiran Special Needs School, Bengaluru, is a special needs
            school recognized by NIOS and is part of the Government of India's
            "Special Accredited Institutions for the Education of the
            Disadvantaged" [SAIED] program. The institution serves students from
            pre-school through 12th grade who have autism, dyslexia, ADHD,
            hearing impairment, mental problems, are slow learners, or come from
            low-income families. The school aims to provide excellent education,
            aid in the child's development, and vocational training to prepare
            them to find work when they grow up.
          </div>
          <div className="text-2xl font-bold my-4">
            8. Aatman Academy, Thane
          </div>
          <div className="my-4">
            Aatman Academy in Thane is a state-accredited special needs school
            that educates kids in grades V-X. The institution, founded on
            October 10, 2010, offers customized learning and specialized
            instruction for pupils with learning challenges, problems, and
            variances. Aatman Educational Society, a registered trust, promotes
            and manages the school. Aatman is currently in the eleventh academic
            year and serves students in and around Thane.
          </div>
          <div className="text-2xl font-bold my-4">
            9. The Gateway School, Mumbai
          </div>
          <div className="my-4">
            The Gateway School of Mumbai is a non-profit school for pupils with
            learning difficulties. It is a co-educational day school that uses
            English as its teaching language and is connected with the CAIE, UK.
          </div>
          <div className="my-4">
            The school provides an excellent education in Mumbai and throughout
            India, using the highest worldwide standards in special education
            and rehabilitation therapies. The school strives to increase to
            assist children in gaining the information, understanding,
            creativity, skill, and attitude needed to flourish as future
            responsible citizens.
          </div>
          <div className="text-2xl font-bold my-4">
            10. Bethany Special School, Bengaluru
          </div>
          <div className="my-4">
            Bethany Special School in Bengaluru, founded in 1983, provides
            education for children with physical and mental challenges. Bethany
            Special School is part of Bethany High, a CISCE accredited school in
            Koramangala, Bengaluru, and was previously located on the main
            school campus. Bethany Special School serves 68 pupils.
          </div>
          <div className="text-2xl font-bold my-4">Final Thoughts</div>
          <div className="my-4">
            These are only 10 of the many special needs schools in the country.
            Such schools benefit children with learning differences or
            cognitive, behavioral, and physical impairments. These schools
            change the teaching methodology as per the children’s abilities,
            enabling them to enjoy their studies and acquire other critical life
            skills essential for personal growth and development.
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

export default SpecialSchools;
