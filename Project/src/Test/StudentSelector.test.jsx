import { render, screen } from '@testing-library/react';
import { StudentSelector } from '../Components/StudentSelector';
import '@testing-library/jest-dom';
import data from '../Data/data.json'

describe('StudentSelector', () => {
    const mockStudents = data.students;

    test('renders label and dropdown properly', () => {
        render(<StudentSelector 
                  students = {mockStudents}
                  selectedId = ""
                  setSelectedId={() => {}}
                />
        );

        expect(screen.getByLabelText(/select a billionaire/i)).toBeInTheDocument();

        // default
        expect(screen.getByRole('option', { name: /select a billionaire/i })).toBeInTheDocument();

        mockStudents.forEach(student => {
            expect(screen.getByText(student.id)).toBeInTheDocument();
        });
    });
});