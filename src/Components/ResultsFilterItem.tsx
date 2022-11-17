type ResultsFilterProps = {
  text: string;
  active: boolean;
};

export default function ResultsFilterItem({
  text,
  active
}: ResultsFilterProps) {
  return (
    <div
      className={`results-filter__option ${
        active && 'results-filter__option--selected'
      }`}
    >
      <a href='/' className='link results-filter__option-text'>
        {text}
      </a>
    </div>
  );
}
