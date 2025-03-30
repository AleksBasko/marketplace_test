import React, { useEffect } from 'react';

import { KeyCodes } from 'constants/enum';
import { CloseButton } from 'components/ui/CloseButton';

import { ModalContent, ModalOverlay } from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    children,
    onCloseModal,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === KeyCodes.ESC && isOpen) {
                onCloseModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onCloseModal} />
                <div>{children}</div>
            </ModalContent>
        </ModalOverlay>
    );
};
