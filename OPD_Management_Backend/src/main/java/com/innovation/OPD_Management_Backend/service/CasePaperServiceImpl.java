package com.innovation.OPD_Management_Backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.innovation.OPD_Management_Backend.model.CasePaper;
import com.innovation.OPD_Management_Backend.repository.CasePaperRepository;



@Service
public class CasePaperServiceImpl implements CasePaperService {
@Autowired
@Qualifier ("caseRepo")
CasePaperRepository caseRepo;

@Override
public CasePaper insert(CasePaper cp) {
	// TODO Auto-generated method stub
	return caseRepo.save(cp);
}

@Override
public void delete(long cid) {
	// TODO Auto-generated method stub
	caseRepo.deleteById(cid);
}

@Override
public CasePaper update(long cid, CasePaper cp) {
	
	Optional<CasePaper> opt=caseRepo.findById(cid);
	if(opt.isPresent())
	{
		CasePaper cpp=opt.get();
		cpp.setPid(cp.getPid());
		cpp.setBp(cp.getBp());
		cpp.setComplain(cp.getComplain());
		cpp.setDt(cp.getDt());
		cpp.setSugar(cp.getSugar());
		cpp.setSpo(cp.getSpo());
		cpp.setAid(cp.getAid());
		return caseRepo.save(cpp);
	}
	return null;
}

@Override
public CasePaper serach(long cid) {
	// TODO Auto-generated method stub
	Optional<CasePaper> opt=caseRepo.findById(cid);
	if(opt.isPresent())
	{
		CasePaper cpp=opt.get();
		
		return cpp;
	}
	return null;
}

@Override
public List<CasePaper> getAll() {
	// TODO Auto-generated method stub
	return caseRepo.findAll();
}
}
