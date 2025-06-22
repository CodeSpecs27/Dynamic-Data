import { render, screen } from "@testing-library/react";
import { SchoolInfo } from "../Components/schoolInfo";
import "@testing-library/jest-dom";
import data from "../Data/data.json";

describe("SchoolInfo", () => {
  beforeEach(() => {
    render(<SchoolInfo info={data.info} />);
  });

  test("renders school information labels properly", () => {
    expect(screen.getByText(/President:/i)).toBeInTheDocument();
    expect(screen.getByText(/Address:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Tel:/i)).toBeInTheDocument();
  });

  test("renders school information values properly", () => {
    expect(screen.getByText(/Piyush kumar/i)).toBeInTheDocument();
    expect(screen.getByText(/Scranton, Pennsylvania/i)).toBeInTheDocument();
    expect(screen.getByText(/billionare@e.com/i)).toBeInTheDocument();
    expect(screen.getByText(/9876543210/i)).toBeInTheDocument();
  });
});
