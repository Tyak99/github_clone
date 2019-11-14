import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginate = ({ pagination, getUser }) => {
  const nextDisabled = pagination && !pagination.next;
  const previousDisabled = pagination && !pagination.prev;
  return (
    <Pagination style={{display: 'flex', justifyContent: 'center'}}>
      <PaginationItem disabled={previousDisabled}>
        <PaginationLink
          first
          onClick={() => getUser(null, pagination.first.url)}
        />
      </PaginationItem>
      <PaginationItem disabled={previousDisabled}>
        <PaginationLink previous>
          Previous
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={nextDisabled}>
        <PaginationLink next onClick={() => getUser(null, pagination.next.url)}>
          Next
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={nextDisabled}>
        <PaginationLink
          last
          onClick={() => getUser(null, pagination.last.url)}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginate;
