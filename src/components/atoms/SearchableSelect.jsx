'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export const SearchableSelect = ({ options, placeholder, value, onChange, required, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  // Cierra el menú si se hace clic afuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      {/* Elemento oculto para validaciones nativas de HTML form */}
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="hidden" 
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Botón Principal Disparador */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white border border-corporate-border rounded-md text-sm text-left focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-colors h-[38px]"
      >
        <span className={selectedOption ? 'text-corporate-text truncate pr-2' : 'text-corporate-text-muted truncate pr-2'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-corporate-text-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Menú Desplegable con Búsqueda */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-corporate-border rounded-md shadow-lg max-h-60 flex flex-col animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="p-2 border-b border-corporate-border bg-slate-50 flex items-center gap-2 shrink-0">
            <Search className="w-4 h-4 text-corporate-text-muted shrink-0" />
            <input
              type="text"
              autoFocus
              className="w-full bg-transparent text-sm focus:outline-none text-corporate-text"
              placeholder="Escribe para buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <ul className="overflow-y-auto w-full py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className={`px-3 py-2 text-sm cursor-pointer transition-colors
                    ${value === opt.value 
                      ? 'bg-corporate-primary text-white font-medium' 
                      : 'text-corporate-text hover:bg-slate-100'}
                  `}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-4 text-sm text-center text-corporate-text-muted">
                No se encontraron resultados
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
