
import { UILevel, UISize } from '@/core/types/ui.types';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<Partial<UISize> & UILevel>`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease,
    box-shadow 0.2s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  /* =========================
     SIZE
  ========================= */

  padding: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '6px 12px';

      case 'large':
        return '14px 24px';

      case 'medium':
      default:
        return '10px 18px';
    }
  }};

  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '0.875rem';

      case 'large':
        return '1rem';

      case 'medium':
      default:
        return '0.95rem';
    }
  }};

  /* =========================
     LEVEL
  ========================= */

  background-color: ${({ level }) => {
    switch (level) {
      case 'optional':
        return '#E5E7EB';

      case 'critical':
        return '#DC2626';

      case 'primary':
      default:
        return '#2563EB';
    }
  }};

  color: ${({ level }) => {
    switch (level) {
      case 'optional':
        return '#111827';

      default:
        return '#FFFFFF';
    }
  }};

  /* =========================
     HOVER
  ========================= */

  &:hover:not(:disabled) {
    background-color: ${({ level }) => {
      switch (level) {
        case 'optional':
          return '#D1D5DB';

        case 'critical':
          return '#B91C1C';

        case 'primary':
        default:
          return '#1D4ED8';
      }
    }};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  /* =========================
     ACTIVE
  ========================= */

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  /* =========================
     FOCUS
  ========================= */

  &:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.35);
    outline-offset: 2px;
  }

  /* =========================
     DISABLED
  ========================= */

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

