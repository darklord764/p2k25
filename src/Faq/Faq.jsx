  import React, { useState, useEffect } from "react";
  import "./Faq.css"; 

  function FAQPage() {
    const [activeDetail, setActiveDetail] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("cookie");
      setIsLoggedIn(!!token);
    }, []);

    const handleBack = () => {
      window.history.back();
    };

    const handleDetailClick = (index) => {
      setActiveDetail((prev) => (prev === index ? null : index));
    };

    return (
      <div className="faq-page">
        {/* FAQ Content */}
        <div className="body-page">
          <main className="faq">
            <div className="faq__logo__holder">
              <div className="faq__logo">
                <img
                  src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-woman-online-mobile.svg"
                  alt="Faq image"
                  className="faq__logo__image hidden-lg"
                />
                <img
                  src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-box-desktop.svg"
                  alt="faq image"
                  className="faq__logo__image visible-lg"
                />
              </div>
            </div>

            <div className="faq__holder">
              <h1 className="faq__heading">FAQ</h1>

              {/* FAQ Items */}
              {faqData.map((item, index) => (
                <details
                  key={index}
                  className="faq__detail"
                  open={activeDetail === index}
                  onClick={() => handleDetailClick(index)}
                >
                  <summary className="faq__summary">
                    <span className="faq__question">{item.question}</span>
                  </summary>
                  <p className="faq__text" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </details>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  const faqData = [
    {
      question: "What are the accommodation arrangements?",
      answer: `For Boys Accommodation facilities are available at the Gurdwara for free. 
              
      For girls Accommodation facilities are available at SGGS Girls Hostel.`,
    },
    {
      question: "What is the exact location of the event?",
      answer: `SGGS, Vishnupuri, Nanded, Maharashtra 431606. how to reach`,
    },
    {
      question: "Is registration fee refundable?",
      answer: `No`,
    },
    {
      question: "Is there any on the spot registration available ?",
      answer: `Yes`,
    },
    {
      question: "what is arrangement of food ?",
      answer: `Boys can have meals at Gurudwara. Girls can buy their meals from Girls Hostel Iteslf`,
    },
    
  ];

  export default FAQPage;
