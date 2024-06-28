import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomFooter() {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="footer-links">
                <p><a href="#" alt="footer link">Audio and Subtitles</a></p>
                <p><a href="#" alt="footer link">Media Center</a></p>
                <p><a href="#" alt="footer link">Privacy</a></p>
                <p><a href="#" alt="footer link">Contact us</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#" alt="footer link">Audio Description</a></p>
                <p><a href="#" alt="footer link">Investor Relations</a></p>
                <p><a href="#" alt="footer link">Legal Notices</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#" alt="footer link">Help Center</a></p>
                <p><a href="#" alt="footer link">Jobs</a></p>
                <p><a href="#" alt="footer link">Cookie Preferences</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#" alt="footer link">Gift Cards</a></p>
                <p><a href="#" alt="footer link">Terms of Use</a></p>
                <p><a href="#" alt="footer link">Corporate Information</a></p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="outline-light" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CustomFooter;
