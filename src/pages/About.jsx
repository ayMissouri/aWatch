import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  padding: 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(15 19 21 / var(--tw-bg-opacity));
  border-radius: 0.75rem;
`;

const Requirements = styled.div``;

const RequirementHeading = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const RequirementText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const Report = styled.div``;

const ReportHeading = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ReportText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const ReportList = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
`;

const ReportListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const Highlight = styled.span`
  color: #c70a46;
`;

const About = () => {
  return (
    <Main>
      <Container>
        <Box>
          <Requirements>
            <RequirementHeading>
              DMCA takedown request requirements
            </RequirementHeading>
            <RequirementText>
              Our website provides links to content hosted by third-party sites.
              We do not host any of the movies or other content ourselves, and
              we do not have control over the content hosted on these
              third-party sites. We simply provide links to these sites as a
              service to our users.
            </RequirementText>
            <RequirementText>
              We take the intellectual property rights of others seriously and
              require that our users do the same. The Digital Millennium
              Copyright Act (DMCA) established a process for addressing claims
              of copyright infringement. If you own a copyright or have
              authority to act on behalf of a copyright owner and want to report
              a claim that a third party is infringing that material please
              submit a DMCA report via email and we will take appropriate
              action.
            </RequirementText>
          </Requirements>
          <Report>
            <ReportHeading>DMCA Report Requirements</ReportHeading>
            <ReportList>
              <ReportListItem>
                A description of the copyrighted work that you claim is being
                infringed.
              </ReportListItem>
              <ReportListItem>
                A description of the material you claim is infringing and that
                you want removed or access to which you want disabled with a URL
                and proof you are the original owner or other location of that
                material.
              </ReportListItem>
              <ReportListItem>
                Your name, title (if acting as an agent), address, telephone
                number, and email address.
              </ReportListItem>
              <ReportListItem>
                The following statement: "I have a good faith belief that the
                use of the copyrighted material I am complaining of is not
                authorized by the copyright owner, its agent, or the law (e.g.,
                as a fair use)".
              </ReportListItem>
              <ReportListItem>
                The following statement: "The information in this notice is
                accurate and, under penalty of perjury, I am the owner, or
                authorized to act on behalf of the owner, of the copyright or of
                an exclusive right that is allegedly infringed".
              </ReportListItem>
              <ReportListItem>
                The following statement: "I understand that I am subject to
                legal action upon submitting a DMCA request without solid
                proof.".
              </ReportListItem>
              <ReportListItem>
                An electronic or physical signature of the owner of the
                copyright or a person authorized to act on the owner's behalf.
              </ReportListItem>
            </ReportList>
            <ReportText>
              Please send your DMCA takedown notice to{" "}
              <Highlight>contact@awatch.fun</Highlight>. We will promptly
              investigate and take appropriate action in accordance with the
              DMCA.
            </ReportText>
            <ReportText>Thank you.</ReportText>
          </Report>
        </Box>
      </Container>
    </Main>
  );
};

export default About;
