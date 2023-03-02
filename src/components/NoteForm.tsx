import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { FormEvent, useRef } from "react";
import { NoteData } from "../App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const markdownInputRef = useRef<HTMLTextAreaElement>(null);

  const _handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleInputRef.current!.value,
      markdown: markdownInputRef.current!.value,
      tags: [],
    });
  };

  return (
    <Form onSubmit={_handleFormSubmit}>
      <Stack>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleInputRef}
                required
                placeholder="Enter title"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="markdown">
          <Form.Label>Markdown</Form.Label>
          <Form.Control
            ref={markdownInputRef}
            required
            as="textarea"
            rows={15}
            placeholder="Leave a note here"
          />
        </Form.Group>
      </Stack>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Link to="..">
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Link>
        <Button type="submit" variant="outline-primary">
          Save
        </Button>
      </Stack>
    </Form>
  );
};

export default NoteForm;
