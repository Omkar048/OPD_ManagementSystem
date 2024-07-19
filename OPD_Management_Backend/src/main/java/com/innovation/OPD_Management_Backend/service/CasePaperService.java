package com.innovation.OPD_Management_Backend.service;

import java.util.List;

import com.innovation.OPD_Management_Backend.model.CasePaper;


public interface CasePaperService {
    CasePaper insert (CasePaper cp);
	void delete(long cid);
	CasePaper update(long cid,CasePaper cp);
	CasePaper serach(long cid);
	List<CasePaper>getAll();
}
