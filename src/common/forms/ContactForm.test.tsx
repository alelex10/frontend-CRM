// src/common/components/forms/ContactForm.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import vi from 'vitest';
import { vi as globalVi } from 'vitest';

// Mock my-fetch module (relative path used in component)
vi.mock('../../my-fetch', () => {
  return {
    __esModule: true,
    default: vi.fn(),
  };
});

import myFetch from '../../my-fetch';

describe('ContactForm', () => {
  beforeEach(() => {
    (myFetch as unknown as vi.Mock).mockReset();
  });

  it('renders all inputs and submit button', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-phone')).toBeInTheDocument();
    expect(screen.getByTestId('input-notes')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('validates required fields and shows error', async () => {
    render(<ContactForm />);
    const submit = screen.getByTestId('submit-button');
    fireEvent.click(submit);

    await waitFor(() => {
      expect(screen.getByTestId('form-error')).toBeInTheDocument();
      expect(screen.getByTestId('form-error').textContent).toMatch(/obligatorio/i);
    });
  });

  it('submits form successfully and shows success message', async () => {
    // Mock successful response
    (myFetch as unknown as vi.Mock).mockResolvedValue({ ok: true, data: { id: '1' } });

    render(<ContactForm />);

    fireEvent.change(screen.getByTestId('input-name'), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByTestId('input-email'), { target: { value: 'juan@example.com' } });

    const submit = screen.getByTestId('submit-button');
    fireEvent.click(submit);

    await waitFor(() => {
      expect(myFetch).toHaveBeenCalled();
      expect(screen.getByTestId('form-success')).toBeInTheDocument();
      expect(screen.getByTestId('form-success').textContent).toMatch(/creado/i);
    });
  });

  it('handles API error and shows error message', async () => {
    (myFetch as unknown as vi.Mock).mockRejectedValue(new Error('Network failure'));

    render(<ContactForm />);

    fireEvent.change(screen.getByTestId('input-name'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByTestId('input-email'), { target: { value: 'ana@example.com' } });

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(myFetch).toHaveBeenCalled();
      expect(screen.getByTestId('form-error')).toBeInTheDocument();
      expect(screen.getByTestId('form-error').textContent).toMatch(/network/i);
    });
  });
});
